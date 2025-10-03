import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Verificar se as variáveis de ambiente estão configuradas
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey;

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function saveQuizResult(result: any) {
  // Se o Supabase não estiver configurado, salvar localmente
  if (!supabase) {
    console.warn('Supabase não configurado. Salvando resultado localmente.');
    
    // Salvar no localStorage como fallback
    try {
      const existingResults = JSON.parse(localStorage.getItem('quiz_results') || '[]');
      const newResult = {
        id: Date.now(),
        total_score: result.totalScore,
        level: result.level,
        category_scores: result.categoryScores,
        answers: result.answers,
        email: result.email,
        completed_at: new Date().toISOString(),
        created_at: new Date().toISOString()
      };
      
      existingResults.push(newResult);
      localStorage.setItem('quiz_results', JSON.stringify(existingResults));
      
      console.log('Resultado salvo localmente:', newResult);
      return newResult;
    } catch (error) {
      console.error('Erro ao salvar localmente:', error);
      return null;
    }
  }

  try {
    const { data, error } = await supabase
      .from('quiz_results')
      .insert([
        {
          total_score: result.totalScore,
          level: result.level,
          category_scores: result.categoryScores,
          answers: result.answers,
          email: result.email,
          completed_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Erro ao salvar resultado no Supabase:', error);
      
      // Fallback para localStorage se houver erro no Supabase
      try {
        const existingResults = JSON.parse(localStorage.getItem('quiz_results') || '[]');
        const newResult = {
          id: Date.now(),
          total_score: result.totalScore,
          level: result.level,
          category_scores: result.categoryScores,
          answers: result.answers,
          email: result.email,
          completed_at: new Date().toISOString(),
          created_at: new Date().toISOString()
        };
        
        existingResults.push(newResult);
        localStorage.setItem('quiz_results', JSON.stringify(existingResults));
        
        console.log('Resultado salvo localmente como fallback:', newResult);
        return newResult;
      } catch (localError) {
        console.error('Erro ao salvar localmente:', localError);
        return null;
      }
    }

    console.log('Resultado salvo no Supabase:', data[0]);
    return data[0];
  } catch (error) {
    console.error('Erro ao salvar resultado:', error);
    
    // Fallback para localStorage
    try {
      const existingResults = JSON.parse(localStorage.getItem('quiz_results') || '[]');
      const newResult = {
        id: Date.now(),
        total_score: result.totalScore,
        level: result.level,
        category_scores: result.categoryScores,
        answers: result.answers,
        email: result.email,
        completed_at: new Date().toISOString(),
        created_at: new Date().toISOString()
      };
      
      existingResults.push(newResult);
      localStorage.setItem('quiz_results', JSON.stringify(existingResults));
      
      console.log('Resultado salvo localmente como fallback:', newResult);
      return newResult;
    } catch (localError) {
      console.error('Erro ao salvar localmente:', localError);
      return null;
    }
  }
}

// Função para criar a tabela quando o Supabase estiver configurado
export async function createQuizResultsTable() {
  if (!supabase) {
    console.warn('Supabase não configurado. Não é possível criar tabela.');
    return false;
  }

  try {
    const { error } = await supabase.rpc('create_quiz_results_table');
    
    if (error) {
      console.error('Erro ao criar tabela:', error);
      return false;
    }
    
    console.log('Tabela quiz_results criada com sucesso');
    return true;
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
    return false;
  }
}
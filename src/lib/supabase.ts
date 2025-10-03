import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveQuizResult(result: any) {
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
      console.error('Erro ao salvar resultado:', error);
      return null;
    }

    return data[0];
  } catch (error) {
    console.error('Erro ao salvar resultado:', error);
    return null;
  }
}
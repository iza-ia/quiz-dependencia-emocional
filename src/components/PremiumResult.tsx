"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Download, ArrowLeft, Star, Target, TrendingUp, BookOpen, CheckCircle, Gift, Lightbulb } from 'lucide-react';

interface PremiumResultProps {
  result: any;
  onBack: () => void;
  onRestart: () => void;
}

export default function PremiumResult({ result, onBack, onRestart }: PremiumResultProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento do relatório
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Gerando seu relatório...</h3>
            <p className="text-gray-600">Analisando suas respostas e criando recomendações personalizadas</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'low': return 'Baixa Dependência';
      case 'moderate': return 'Dependência Moderada';
      case 'high': return 'Alta Dependência';
      default: return 'Indefinido';
    }
  };

  const getRecommendations = (level: string) => {
    switch (level) {
      case 'low':
        return [
          "Continue cultivando sua independência emocional através de hobbies pessoais",
          "Pratique a comunicação assertiva para manter relacionamentos saudáveis",
          "Desenvolva ainda mais sua autoestima através de conquistas pessoais",
          "Mantenha um círculo social diversificado e ativo"
        ];
      case 'moderate':
        return [
          "Pratique exercícios de mindfulness para aumentar a autoconsciência",
          "Estabeleça limites saudáveis em seus relacionamentos",
          "Trabalhe na construção da sua autoestima através de terapia ou autoajuda",
          "Desenvolva interesses e atividades independentes do seu parceiro",
          "Pratique a comunicação não-violenta para expressar suas necessidades"
        ];
      case 'high':
        return [
          "Considere buscar ajuda profissional de um psicólogo especializado",
          "Pratique técnicas de regulação emocional como respiração e meditação",
          "Trabalhe na reconstrução da sua identidade individual",
          "Estabeleça uma rede de apoio com amigos e familiares",
          "Considere participar de grupos de apoio para dependência emocional",
          "Desenvolva um plano de autocuidado diário"
        ];
      default:
        return [];
    }
  };

  const categoryNames = {
    attachment: 'Apego',
    jealousy: 'Ciúme',
    self_esteem: 'Autoestima',
    control: 'Controle',
    fear: 'Medo do Abandono'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="absolute left-4 top-4 md:left-8 md:top-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-pink-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Seu Relatório Completo</h1>
          </div>
          
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getLevelColor(result.level)}`}>
            {getLevelText(result.level)} - {result.totalScore} pontos
          </div>
        </div>

        <div className="space-y-8">
          {/* Resumo Executivo */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                Resumo Executivo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Com base nas suas respostas, identificamos padrões específicos em seu comportamento emocional. 
                Seu nível de dependência emocional é classificado como <strong>{getLevelText(result.level).toLowerCase()}</strong>, 
                o que significa que você {result.level === 'low' ? 'demonstra boa independência emocional, mas ainda há aspectos para fortalecer' : 
                result.level === 'moderate' ? 'apresenta alguns desafios que podem impactar seus relacionamentos' : 
                'enfrenta desafios significativos que requerem atenção especial'}.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800">Pontuação Total</h3>
                  <p className="text-2xl font-bold text-blue-600">{result.totalScore}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800">Área Forte</h3>
                  <p className="text-sm font-medium text-green-600">
                    {Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] < result.categoryScores[b[0]] ? a : b
                    )[0] === 'self_esteem' ? 'Autoestima' : 
                    Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] < result.categoryScores[b[0]] ? a : b
                    )[0] === 'attachment' ? 'Apego' :
                    Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] < result.categoryScores[b[0]] ? a : b
                    )[0] === 'jealousy' ? 'Ciúme' :
                    Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] < result.categoryScores[b[0]] ? a : b
                    )[0] === 'control' ? 'Controle' : 'Medo'}
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-800">Foco Principal</h3>
                  <p className="text-sm font-medium text-orange-600">
                    {Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] > result.categoryScores[b[0]] ? a : b
                    )[0] === 'self_esteem' ? 'Autoestima' : 
                    Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] > result.categoryScores[b[0]] ? a : b
                    )[0] === 'attachment' ? 'Apego' :
                    Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] > result.categoryScores[b[0]] ? a : b
                    )[0] === 'jealousy' ? 'Ciúme' :
                    Object.entries(result.categoryScores).reduce((a, b) => 
                      result.categoryScores[a[0]] > result.categoryScores[b[0]] ? a : b
                    )[0] === 'control' ? 'Controle' : 'Medo'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mapa Emocional */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <Target className="w-6 h-6 text-purple-500 mr-2" />
                Mapa Emocional Detalhado
              </CardTitle>
              <CardDescription>
                Análise por categoria dos seus padrões emocionais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(result.categoryScores).map(([category, score]) => {
                  const maxScore = 28; // 7 perguntas * 4 pontos máximos
                  const percentage = (score / maxScore) * 100;
                  
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">
                          {categoryNames[category as keyof typeof categoryNames]}
                        </h3>
                        <Badge variant={percentage > 70 ? "destructive" : percentage > 40 ? "secondary" : "default"}>
                          {score}/{maxScore}
                        </Badge>
                      </div>
                      <Progress value={percentage} className="h-3" />
                      <p className="text-sm text-gray-600">
                        {percentage > 70 ? "Área que requer atenção especial" :
                         percentage > 40 ? "Área com desafios moderados" :
                         "Área relativamente equilibrada"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Plano de Ação */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Plano de Ação Personalizado
              </CardTitle>
              <CardDescription>
                Estratégias específicas para seu perfil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getRecommendations(result.level).map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bônus: E-book */}
          <Card className="shadow-lg border-2 border-gradient-to-r from-purple-500 to-pink-500 bg-white">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="flex items-center text-xl">
                <Gift className="w-6 h-6 mr-2" />
                BÔNUS: E-book "Amor Próprio em 30 Dias"
              </CardTitle>
              <CardDescription className="text-purple-100">
                Guia prático incluído no seu pacote
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">O que você vai encontrar:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      30 exercícios práticos diários
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Técnicas de autoconhecimento
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Estratégias para fortalecer a autoestima
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Planos de ação semanais
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar E-book
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRestart}
              variant="outline"
              className="flex items-center"
            >
              <Heart className="w-4 h-4 mr-2" />
              Fazer Novo Quiz
            </Button>
            <Button
              onClick={() => window.print()}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Salvar Relatório
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
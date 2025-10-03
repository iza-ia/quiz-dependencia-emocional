"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import QuizComponent from '@/components/QuizComponent';
import ResultComponent from '@/components/ResultComponent';
import PremiumResult from '@/components/PremiumResult';
import { Heart, Play, CheckCircle, Star, Users, Shield, Zap, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';

type AppState = 'landing' | 'quiz' | 'result' | 'premium';

export default function Home() {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [quizResult, setQuizResult] = useState<any>(null);

  const handleStartQuiz = () => {
    setCurrentState('quiz');
  };

  const handleQuizComplete = (result: any) => {
    setQuizResult(result);
    setCurrentState('result');
  };

  const handleUpgrade = () => {
    // Integração com Kiwify - substitua pela URL real do seu produto
    const kiwifyUrl = "https://pay.kiwify.com.br/veTb399";
    
    // Adiciona parâmetros para rastreamento e personalização
    const urlWithParams = `${kiwifyUrl}?email=${encodeURIComponent(quizResult?.email || '')}&score=${quizResult?.totalScore || 0}&level=${quizResult?.level || ''}&utm_source=quiz&utm_medium=paywall&utm_campaign=dependencia_emocional`;
    
    // Abre em nova aba
    window.open(urlWithParams, '_blank');
    
    // Simula redirecionamento pós-pagamento (em produção, isso viria do webhook da Kiwify)
    // Remova este setTimeout em produção e implemente webhook real
    setTimeout(() => {
      setCurrentState('premium');
    }, 5000);
  };

  const handleRestart = () => {
    setQuizResult(null);
    setCurrentState('landing');
  };

  const handleBackToLanding = () => {
    setCurrentState('landing');
  };

  if (currentState === 'quiz') {
    return <QuizComponent onComplete={handleQuizComplete} onBack={handleBackToLanding} />;
  }

  if (currentState === 'result') {
    return <ResultComponent result={quizResult} onUpgrade={handleUpgrade} onRestart={handleRestart} />;
  }

  if (currentState === 'premium') {
    return <PremiumResult result={quizResult} onBack={handleBackToLanding} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-pink-500 mr-3" />
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              Quiz Científico Validado
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Você tem
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Dependência Emocional </span>
            no Amor?
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra em apenas 5 minutos se seus padrões emocionais estão sabotando seus relacionamentos. 
            Mais de <strong>50.000 pessoas</strong> já fizeram este teste e transformaram suas vidas amorosas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 mr-2" />
              Começar Quiz Gratuito
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              100% Gratuito • Resultado Imediato • Privacidade Garantida
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm">+50.000 pessoas testadas</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">4.9/5 estrelas de avaliação</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">Baseado em pesquisas científicas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Por que fazer este quiz?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desenvolvido por especialistas em psicologia, este teste identifica padrões que podem estar 
              prejudicando seus relacionamentos sem você perceber.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Diagnóstico Preciso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  35 perguntas científicas que avaliam 5 dimensões da dependência emocional: 
                  apego, ciúme, autoestima, controle e medo do abandono.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Resultado Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receba uma análise detalhada do seu perfil emocional com recomendações 
                  específicas para seu nível de dependência.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Plano de Ação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Estratégias práticas e exercícios para desenvolver independência emocional 
                  e relacionamentos mais saudáveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sinais de Alerta da Dependência Emocional
            </h2>
            <p className="text-gray-600">
              Você se identifica com algum destes comportamentos?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Sente ansiedade quando seu parceiro não responde mensagens rapidamente",
              "Tem dificuldade em tomar decisões sem a aprovação do parceiro",
              "Cancela compromissos com amigos para ficar com o parceiro",
              "Verifica constantemente as redes sociais do parceiro",
              "Sente-se perdido(a) quando está sozinho(a)",
              "Tem medo constante de ser abandonado(a)",
              "Evita conflitos por medo de perder o relacionamento",
              "Sente que precisa do parceiro para se sentir completo(a)"
            ].map((sign, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                  !
                </div>
                <p className="text-gray-700">{sign}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Se você se identificou com 3 ou mais sinais, é importante fazer uma avaliação mais profunda.
            </p>
            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Fazer Avaliação Completa
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme Seus Relacionamentos Hoje
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Milhares de pessoas já descobriram seus padrões emocionais e construíram relacionamentos mais saudáveis. 
            Sua jornada de autoconhecimento começa agora.
          </p>
          
          <Button
            onClick={handleStartQuiz}
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Play className="w-6 h-6 mr-2" />
            Começar Minha Transformação
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-pink-100">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Teste 100% gratuito
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Resultado em 5 minutos
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Privacidade garantida
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-pink-500 mr-2" />
            <span className="font-semibold">Quiz Dependência Emocional</span>
          </div>
          <p className="text-sm">
            © 2024 - Desenvolvido com base em pesquisas científicas sobre relacionamentos e psicologia emocional.
          </p>
          <Separator className="my-4 bg-gray-600" />
          <p className="text-xs text-gray-400">
            Este quiz é uma ferramenta de autoconhecimento e não substitui acompanhamento psicológico profissional.
          </p>
        </div>
      </footer>
    </div>
  );
}
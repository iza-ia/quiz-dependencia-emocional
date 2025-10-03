"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getResultSummary } from '@/lib/quiz-data';
import { Heart, ArrowRight, Star, Shield, Zap, Lock, CheckCircle, Gift } from 'lucide-react';

interface ResultComponentProps {
  result: any;
  onUpgrade: () => void;
  onRestart: () => void;
}

export default function ResultComponent({ result, onUpgrade, onRestart }: ResultComponentProps) {
  const summary = getResultSummary(result);
  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-pink-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Seu Resultado</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resultado Gratuito */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getLevelColor(result.level)}`}>
                  {getLevelText(result.level)}
                </div>
                <CardTitle className="text-xl text-gray-800 mt-4">
                  Resultado Preliminar
                </CardTitle>
                <CardDescription>
                  Pontuação: {result.totalScore} pontos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {summary}
                </p>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-800">Quer saber mais?</h3>
                  </div>
                  <p className="text-sm text-purple-700">
                    Este é apenas um resumo básico. Desbloqueie seu relatório completo com análise detalhada e plano de ação personalizado!
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                onClick={onRestart}
                className="flex-1"
              >
                Refazer Quiz
              </Button>
            </div>
          </div>

          {/* Paywall */}
          <div className="space-y-6">
            <Card className="shadow-xl border-2 border-gradient-to-r from-pink-500 to-purple-600 bg-white">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 mr-2" />
                  <CardTitle className="text-xl">Relatório Completo</CardTitle>
                </div>
                <CardDescription className="text-pink-100">
                  Análise profunda + Plano de ação personalizado
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Mapa emocional detalhado por categoria</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Análise personalizada das suas respostas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Plano de ação com exercícios práticos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Dicas para desenvolver independência emocional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Estratégias para relacionamentos mais saudáveis</span>
                  </div>
                  <div className="flex items-center">
                    <Gift className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700 font-semibold">BÔNUS: E-book "Amor Próprio em 30 Dias"</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 line-through">De R$ 29,90</p>
                      <p className="text-2xl font-bold text-green-600">R$ 9,90</p>
                      <p className="text-xs text-gray-500">Oferta por tempo limitado</p>
                    </div>
                    <div className="text-right">
                      <Shield className="w-8 h-8 text-green-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Garantia de 7 dias</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={onUpgrade}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Desbloquear Relatório Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    Pagamento Seguro
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Acesso Imediato
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
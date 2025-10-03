import { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  // Attachment (Apego) - 7 perguntas
  {
    id: 1,
    question: "Com que frequência você sente necessidade de estar sempre perto do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "attachment"
  },
  {
    id: 2,
    question: "Você se sente ansioso(a) quando seu parceiro não responde suas mensagens rapidamente?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "attachment"
  },
  {
    id: 3,
    question: "Você tem dificuldade em tomar decisões importantes sem a aprovação do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "attachment"
  },
  {
    id: 4,
    question: "Descreva como você se sente quando precisa passar um tempo longe do seu parceiro:",
    type: "open",
    category: "attachment"
  },
  {
    id: 5,
    question: "Você sente que precisa do seu parceiro para se sentir completo(a)?",
    type: "multiple",
    options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
    category: "attachment"
  },
  {
    id: 6,
    question: "Com que frequência você cancela compromissos com amigos para ficar com seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "attachment"
  },
  {
    id: 7,
    question: "Você se sente perdido(a) quando está sozinho(a)?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "attachment"
  },

  // Jealousy (Ciúme) - 7 perguntas
  {
    id: 8,
    question: "Com que frequência você verifica as redes sociais do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Constantemente"],
    category: "jealousy"
  },
  {
    id: 9,
    question: "Você se incomoda quando seu parceiro conversa com outras pessoas?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "jealousy"
  },
  {
    id: 10,
    question: "Você já pediu para seu parceiro parar de falar com alguém?",
    type: "multiple",
    options: ["Nunca", "Uma vez", "Algumas vezes", "Várias vezes", "Frequentemente"],
    category: "jealousy"
  },
  {
    id: 11,
    question: "Descreva uma situação em que você sentiu ciúme e como reagiu:",
    type: "open",
    category: "jealousy"
  },
  {
    id: 12,
    question: "Você desconfia das intenções do seu parceiro mesmo sem motivo aparente?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "jealousy"
  },
  {
    id: 13,
    question: "Você se sente ameaçado(a) pelos amigos do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "jealousy"
  },
  {
    id: 14,
    question: "Com que frequência você questiona onde seu parceiro esteve?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "jealousy"
  },

  // Self Esteem (Autoestima) - 7 perguntas
  {
    id: 15,
    question: "Você acredita que merece ser amado(a)?",
    type: "multiple",
    options: ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"],
    category: "self_esteem"
  },
  {
    id: 16,
    question: "Com que frequência você se compara com outras pessoas?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Constantemente"],
    category: "self_esteem"
  },
  {
    id: 17,
    question: "Você se sente inferior ao seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "self_esteem"
  },
  {
    id: 18,
    question: "Descreva como você se vê em um relacionamento:",
    type: "open",
    category: "self_esteem"
  },
  {
    id: 19,
    question: "Você tem medo de que seu parceiro encontre alguém melhor?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "self_esteem"
  },
  {
    id: 20,
    question: "Você se critica muito quando comete erros no relacionamento?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "self_esteem"
  },
  {
    id: 21,
    question: "Você sente que precisa mudar para agradar seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "self_esteem"
  },

  // Control (Controle) - 7 perguntas
  {
    id: 22,
    question: "Você tenta controlar as atividades do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "control"
  },
  {
    id: 23,
    question: "Com que frequência você verifica o celular do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "control"
  },
  {
    id: 24,
    question: "Você se incomoda quando seu parceiro tem opiniões diferentes das suas?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "control"
  },
  {
    id: 25,
    question: "Descreva como você reage quando seu parceiro quer fazer algo sem você:",
    type: "open",
    category: "control"
  },
  {
    id: 26,
    question: "Você tenta influenciar as decisões do seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "control"
  },
  {
    id: 27,
    question: "Você se sente desconfortável quando não sabe onde seu parceiro está?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "control"
  },
  {
    id: 28,
    question: "Você já deu ultimatos ao seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Uma vez", "Algumas vezes", "Várias vezes", "Frequentemente"],
    category: "control"
  },

  // Fear (Medo) - 7 perguntas
  {
    id: 29,
    question: "Com que frequência você tem medo de ser abandonado(a)?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Constantemente"],
    category: "fear"
  },
  {
    id: 30,
    question: "Você evita conflitos por medo de perder seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "fear"
  },
  {
    id: 31,
    question: "Você tem pesadelos ou pensamentos obsessivos sobre perder seu parceiro?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "fear"
  },
  {
    id: 32,
    question: "Descreva seus maiores medos em um relacionamento:",
    type: "open",
    category: "fear"
  },
  {
    id: 33,
    question: "Você se sente ansioso(a) quando pensa no futuro do relacionamento?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    category: "fear"
  },
  {
    id: 34,
    question: "Você já se sabotou em um relacionamento por medo?",
    type: "multiple",
    options: ["Nunca", "Uma vez", "Algumas vezes", "Várias vezes", "Frequentemente"],
    category: "fear"
  },
  {
    id: 35,
    question: "Você tem medo de ficar sozinho(a)?",
    type: "multiple",
    options: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Constantemente"],
    category: "fear"
  }
];

export function calculateScore(answers: any[]): any {
  let totalScore = 0;
  const categoryScores = {
    attachment: 0,
    jealousy: 0,
    self_esteem: 0,
    control: 0,
    fear: 0
  };

  answers.forEach((answer, index) => {
    const question = quizQuestions[index];
    let score = 0;

    if (question.type === 'multiple' && typeof answer === 'number') {
      // Para perguntas de autoestima (15), a pontuação é invertida
      if (question.id === 15) {
        score = 4 - answer; // Inverte a pontuação
      } else {
        score = answer;
      }
    } else if (question.type === 'open') {
      // Para perguntas abertas, atribuímos uma pontuação baseada no comprimento e palavras-chave
      const text = answer.toLowerCase();
      if (text.includes('muito') || text.includes('sempre') || text.includes('constantemente')) {
        score = 4;
      } else if (text.includes('às vezes') || text.includes('frequentemente')) {
        score = 2;
      } else {
        score = 1;
      }
    }

    totalScore += score;
    categoryScores[question.category] += score;
  });

  // Determina o nível baseado na pontuação total
  let level: 'low' | 'moderate' | 'high';
  if (totalScore <= 50) {
    level = 'low';
  } else if (totalScore <= 100) {
    level = 'moderate';
  } else {
    level = 'high';
  }

  return {
    totalScore,
    level,
    categoryScores
  };
}

export function getResultSummary(result: any): string {
  const { level, totalScore } = result;
  
  switch (level) {
    case 'low':
      return `Seus resultados indicam um nível baixo de dependência emocional (${totalScore} pontos). Você demonstra sinais de independência emocional saudável, mas ainda há aspectos que podem ser trabalhados para fortalecer ainda mais sua autonomia no relacionamento.`;
    
    case 'moderate':
      return `Seus resultados indicam um nível moderado de dependência emocional (${totalScore} pontos). Você apresenta alguns padrões que podem estar impactando sua felicidade e a qualidade do seu relacionamento. É importante trabalhar esses aspectos para desenvolver maior equilíbrio emocional.`;
    
    case 'high':
      return `Seus resultados indicam um nível alto de dependência emocional (${totalScore} pontos). Você pode estar enfrentando desafios significativos que afetam tanto seu bem-estar quanto a saúde do seu relacionamento. É recomendável buscar apoio para desenvolver maior independência emocional.`;
    
    default:
      return "Não foi possível calcular seu resultado. Tente novamente.";
  }
}
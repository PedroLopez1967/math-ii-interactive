import React from 'react';

export interface Problem {
    id: string;
    title: string;
    description: string;
    objective: string;
    difficulty: 'easy' | 'medium' | 'hard';
    initialExpression: React.ReactNode;
    steps: {
        title: string;
        content: React.ReactNode;
    }[];
    hints: string[];
    correctAnswer: string;
}

const Fraction: React.FC<{ num: React.ReactNode; den: React.ReactNode }> = ({ num, den }) => (
    <span className="inline-flex flex-col items-center align-middle mx-1">
        <span className="border-b border-current pb-[1px] mb-[1px]">{num}</span>
        <span>{den}</span>
    </span>
);

export const PROBLEMS_I1: Problem[] = [
    {
        id: 'limit_cv_01',
        title: 'Límite con Cambio de Variable #1',
        description: 'Calcula el siguiente límite utilizando un cambio de variable apropiado.',
        objective: 'I.1',
        difficulty: 'easy',
        initialExpression: (
            <span>
                lim<sub>x→0</sub> <Fraction num={<span>(1+x)<sup>5</sup> - 1</span>} den="x" />
            </span>
        ),
        steps: [
            { title: 'Identificar el cambio', content: 'Sea u = 1+x. Cuando x → 0, u → 1.' },
            {
                title: 'Reescribir el límite',
                content: (
                    <span>
                        lim<sub>u→1</sub> <Fraction num={<span>u<sup>5</sup> - 1</span>} den="u-1" />
                    </span>
                )
            },
            {
                title: 'Factorizar',
                content: (
                    <span>
                        lim<sub>u→1</sub> <Fraction num={<span>(u-1)(u<sup>4</sup>+u<sup>3</sup>+u<sup>2</sup>+u+1)</span>} den="u-1" />
                    </span>
                )
            },
            {
                title: 'Simplificar y evaluar',
                content: (
                    <span>
                        lim<sub>u→1</sub> (u<sup>4</sup>+u<sup>3</sup>+u<sup>2</sup>+u+1) = 1+1+1+1+1 = 5
                    </span>
                )
            }
        ],
        hints: [
            'Intenta hacer u = 1+x.',
            'Recuerda la factorización de a^n - b^n.',
            'El límite se convierte en la derivada de x^5 en x=1.'
        ],
        correctAnswer: '5'
    },
    {
        id: 'limit_cv_02',
        title: 'Límite con Cambio de Variable #2',
        description: 'Resuelve el límite trigonométrico.',
        objective: 'I.1',
        difficulty: 'medium',
        initialExpression: (
            <span>
                lim<sub>x→π/4</sub> <Fraction num="tan(x) - 1" den="x - π/4" />
            </span>
        ),
        steps: [
            { title: 'Cambio de variable', content: 'Sea h = x - π/4. Entonces x = h + π/4. Cuando x → π/4, h → 0.' },
            {
                title: 'Sustituir',
                content: (
                    <span>
                        lim<sub>h→0</sub> <Fraction num="tan(h + π/4) - 1" den="h" />
                    </span>
                )
            },
            {
                title: 'Identidad trigonométrica',
                content: (
                    <span>
                        tan(A+B) = <Fraction num="tan A + tan B" den="1 - tan A tan B" />
                    </span>
                )
            },
            {
                title: 'Simplificar',
                content: (
                    <span>
                        lim<sub>h→0</sub> <Fraction num={<span><Fraction num="tan h + 1" den="1 - tan h" /> - 1</span>} den="h" /> = ... = lim<sub>h→0</sub> <Fraction num="2tan h" den="h(1 - tan h)" />
                    </span>
                )
            },
            {
                title: 'Evaluar',
                content: (
                    <span>
                        2 · lim<sub>h→0</sub> <Fraction num="tan h" den="h" /> · lim<sub>h→0</sub> <Fraction num="1" den="1 - tan h" /> = 2 · 1 · 1 = 2
                    </span>
                )
            }
        ],
        hints: [
            'Haz el cambio h = x - π/4.',
            'Usa la fórmula de la tangente de la suma.',
            'Recuerda que lim(h→0) (tan h)/h = 1.'
        ],
        correctAnswer: '2'
    },
    {
        id: 'limit_special_01',
        title: 'Límite Especial #1',
        description: 'Calcula el límite utilizando el límite especial del seno.',
        objective: 'I.2',
        difficulty: 'easy',
        initialExpression: (
            <span>
                lim<sub>x→0</sub> <Fraction num="sin(5x)" den="3x" />
            </span>
        ),
        steps: [
            {
                title: 'Multiplicar por 1 conveniente',
                content: (
                    <span>
                        Multiplicamos y dividimos por 5: <Fraction num="5" den="5" /> · <Fraction num="sin(5x)" den="3x" />
                    </span>
                )
            },
            {
                title: 'Reordenar',
                content: (
                    <span>
                        <Fraction num="5" den="3" /> · <Fraction num="sin(5x)" den="5x" />
                    </span>
                )
            },
            {
                title: 'Aplicar límite especial',
                content: (
                    <span>
                        Sabemos que lim<sub>u→0</sub> <Fraction num="sin u" den="u" /> = 1. Aquí u=5x.
                    </span>
                )
            },
            {
                title: 'Evaluar',
                content: (
                    <span>
                        <Fraction num="5" den="3" /> · 1 = 5/3
                    </span>
                )
            }
        ],
        hints: [
            'Recuerda que lim(u→0) (sin u)/u = 1.',
            'Necesitas tener el mismo argumento en el denominador.',
            'Multiplica y divide por 5.'
        ],
        correctAnswer: '5/3'
    },
    {
        id: 'limit_special_02',
        title: 'Límite Especial #2',
        description: 'Resuelve el límite trigonométrico complejo.',
        objective: 'I.2',
        difficulty: 'hard',
        initialExpression: (
            <span>
                lim<sub>x→0</sub> <Fraction num="1 - cos(x)" den={<span>x<sup>2</sup></span>} />
            </span>
        ),
        steps: [
            {
                title: 'Multiplicar por el conjugado',
                content: (
                    <span>
                        Multiplicamos por 1 + cos x: <Fraction num="(1 - cos x)(1 + cos x)" den={<span>x<sup>2</sup>(1 + cos x)</span>} />
                    </span>
                )
            },
            {
                title: 'Simplificar numerador',
                content: (
                    <span>
                        <Fraction num={<span>1 - cos<sup>2</sup>x</span>} den={<span>x<sup>2</sup>(1 + cos x)</span>} /> = <Fraction num={<span>sin<sup>2</sup>x</span>} den={<span>x<sup>2</sup>(1 + cos x)</span>} />
                    </span>
                )
            },
            {
                title: 'Separar términos',
                content: (
                    <span>
                        (<Fraction num="sin x" den="x" />)<sup>2</sup> · <Fraction num="1" den="1 + cos x" />
                    </span>
                )
            },
            {
                title: 'Evaluar límites',
                content: (
                    <span>
                        1<sup>2</sup> · <Fraction num="1" den="1 + cos 0" /> = 1 · <Fraction num="1" den="2" /> = 1/2
                    </span>
                )
            }
        ],
        hints: [
            'Multiplica por el conjugado 1 + cos x.',
            'Usa la identidad sin²x + cos²x = 1.',
            'Separa el límite en dos partes.'
        ],
        correctAnswer: '1/2'
    },
    {
        id: 'continuity_01',
        title: 'Continuidad en un Punto',
        description: 'Determina si la función es continua en x=2.',
        objective: 'I.3',
        difficulty: 'easy',
        initialExpression: (
            <span>
                f(x) = {'{'} <br />
                &nbsp;&nbsp;x<sup>2</sup> - 1 si x &lt; 2; <br />
                &nbsp;&nbsp;3 si x = 2; <br />
                &nbsp;&nbsp;2x - 1 si x &gt; 2 <br />
                {'}'}
            </span>
        ),
        steps: [
            { title: 'Evaluar f(2)', content: 'Por definición, f(2) = 3.' },
            { title: 'Límite por la izquierda', content: <span>lim<sub>x→2⁻</sub> (x<sup>2</sup> - 1) = 2<sup>2</sup> - 1 = 3.</span> },
            { title: 'Límite por la derecha', content: <span>lim<sub>x→2⁺</sub> (2x - 1) = 2(2) - 1 = 3.</span> },
            { title: 'Conclusión', content: 'El límite existe y es 3. Además f(2) = 3. Por tanto, es continua.' }
        ],
        hints: [
            'Calcula el límite por la izquierda usando x^2 - 1.',
            'Calcula el límite por la derecha usando 2x - 1.',
            'Compara el límite con el valor de la función.'
        ],
        correctAnswer: 'continua'
    },
    {
        id: 'continuity_02',
        title: 'Teorema del Valor Intermedio',
        description: '¿Tiene la función f(x) = x^3 - x - 1 una raíz en [1, 2]?',
        objective: 'I.3',
        difficulty: 'medium',
        initialExpression: (
            <span>
                f(x) = x<sup>3</sup> - x - 1, en [1, 2]
            </span>
        ),
        steps: [
            { title: 'Evaluar en a=1', content: <span>f(1) = 1<sup>3</sup> - 1 - 1 = -1.</span> },
            { title: 'Evaluar en b=2', content: <span>f(2) = 2<sup>3</sup> - 2 - 1 = 5.</span> },
            { title: 'Aplicar TVI', content: 'Como f(1) < 0 y f(2) > 0, y f es polinómica (continua), existe c ∈ (1,2) tal que f(c) = 0.' }
        ],
        hints: [
            'Calcula f(1).',
            'Calcula f(2).',
            'Verifica si hay cambio de signo.'
        ],
        correctAnswer: 'si'
    }
];

export const PROBLEMS_I2 = PROBLEMS_I1.filter(p => p.objective === 'I.2');
export const PROBLEMS_I3 = PROBLEMS_I1.filter(p => p.objective === 'I.3');

export const PROBLEMS_II1: Problem[] = [
    {
        id: 'deriv_def_01',
        title: 'Derivada por Definición',
        description: 'Calcula la derivada de f(x) = x^2 + 1 usando la definición.',
        objective: 'II.1',
        difficulty: 'medium',
        initialExpression: <span>f(x) = x<sup>2</sup> + 1</span>,
        steps: [
            { title: 'Definición', content: <span>f'(x) = lim<sub>h→0</sub> <Fraction num="f(x+h) - f(x)" den="h" /></span> },
            { title: 'Sustituir f(x+h)', content: <span>f(x+h) = (x+h)<sup>2</sup> + 1 = x<sup>2</sup> + 2xh + h<sup>2</sup> + 1</span> },
            { title: 'Restar f(x)', content: <span>f(x+h) - f(x) = (x<sup>2</sup> + 2xh + h<sup>2</sup> + 1) - (x<sup>2</sup> + 1) = 2xh + h<sup>2</sup></span> },
            { title: 'Dividir por h', content: <span><Fraction num={<span>2xh + h<sup>2</sup></span>} den="h" /> = 2x + h</span> },
            { title: 'Límite h->0', content: <span>lim<sub>h→0</sub> (2x + h) = 2x</span> }
        ],
        hints: [
            'Expande (x+h)^2.',
            'Cancela los términos que no tienen h.',
            'Factoriza h en el numerador.'
        ],
        correctAnswer: '2x'
    },
    {
        id: 'deriv_rule_01',
        title: 'Regla del Producto',
        description: 'Calcula la derivada de f(x) = x^2 sin(x).',
        objective: 'II.1',
        difficulty: 'hard',
        initialExpression: <span>f(x) = x<sup>2</sup> sin(x)</span>,
        steps: [
            { title: 'Identificar u y v', content: <span>u = x<sup>2</sup>, v = sin(x)</span> },
            { title: 'Derivar u y v', content: <span>u' = 2x, v' = cos(x)</span> },
            { title: 'Aplicar regla', content: <span>f'(x) = u'v + uv' = 2x sin(x) + x<sup>2</sup> cos(x)</span> }
        ],
        hints: [
            'Usa la regla del producto: (uv)\' = u\'v + uv\'.',
            'La derivada de x^2 es 2x.',
            'La derivada de sin(x) es cos(x).'
        ],
        correctAnswer: '2x sin(x) + x^2 cos(x)'
    }
];

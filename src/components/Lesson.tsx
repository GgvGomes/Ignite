import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

type LessonProps = {
    title: string;
    slug: string;
    availabeAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    console.log(props.availabeAt)
    const isLessonAvailabe = isPast(props.availabeAt);
    const avaliabeDateFormat = format(props.availabeAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBr,
    });

    return (
        <a href="#">
            <span className="text-gray-300">
                {avaliabeDateFormat}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailabe ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ): (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}


                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : "AULA PRÁTICA"}
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}
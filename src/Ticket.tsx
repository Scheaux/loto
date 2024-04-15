import { useState } from 'react';
import './Ticket.css';
import image from './assets/magic-wand.png';
import Numbers from './components/Numbers';

interface TicketProps {
    ticketNum: number;
}

function Ticket({ ticketNum }: TicketProps) {
    const numbers1: number[] = Array.from({ length: 19 }, (_, index) => {
        return index + 1;
    });
    const numbers2: number[] = Array.from({ length: 2 }, (_, index) => {
        return index + 1;
    });

    const [selectedNumbers1, setSelectedNumbers1] = useState<number[]>([]);
    const [selectedNumbers2, setSelectedNumbers2] = useState<number[]>([]);
    const [ticketUsed, setTicketUsed] = useState<boolean>(false);
    const [isLucky, setIsLucky] = useState<boolean>(false);

    function showResult() {
        const randomNumbers1 = generateUniqueRandomNumbers(8, 1, 19);
        const randomNumbers2 = generateUniqueRandomNumbers(1, 1, 2);

        let count = 0;
        randomNumbers1.forEach((num) => {
            if (selectedNumbers1.includes(num)) count++;
        });

        if ((selectedNumbers2.length === 1 && randomNumbers2.includes(selectedNumbers2[0]) && count >= 3) || count >= 4) {
            setIsLucky(true);
        }
        setTicketUsed(true);
    }

    return (
        <div className="ticket">
            <div className="ticket-header">
                <h2>Билет {ticketNum}</h2>
                <img src={image} width={24} height={24} />
            </div>
            {!ticketUsed && (
                <>
                    <span>
                        <b>Поле 1</b> отметьте 8 чисел
                    </span>
                    <Numbers numbers={numbers1} selectedNumbers={selectedNumbers1} setSelectedNumbers={setSelectedNumbers1} max={8} />
                    <span>
                        <b>Поле 2</b> отметьте 1 число
                    </span>
                    <Numbers numbers={numbers2} selectedNumbers={selectedNumbers2} setSelectedNumbers={setSelectedNumbers2} max={1} />
                    <div className='button-wrapper'>
                        <button className='show-result' onClick={showResult}>Показать результат</button>
                    </div>
                </>
            )}
            {ticketUsed && isLucky && <span>Ого, вы выиграли! Поздравляем!</span>}
            {ticketUsed && !isLucky && <span>Вы ничего не выиграли</span>}
        </div>
    );
}

function generateUniqueRandomNumbers(length: number, min: number, max: number): number[] {
    const numbers: number[] = [];
    while (numbers.length < length) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

export default Ticket;

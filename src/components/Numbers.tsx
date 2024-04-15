import { v4 } from 'uuid';

interface NumbersProps {
    numbers: number[];
    selectedNumbers: number[];
    setSelectedNumbers: (selectedNumbers: number[]) => void;
    max: number;
}

function Numbers({ numbers, selectedNumbers, setSelectedNumbers, max }: NumbersProps) {
    function selectNumber(num: number) {
        if (selectedNumbers.includes(num)) {
            setSelectedNumbers(selectedNumbers.filter((x) => x !== num));
        } else if (selectedNumbers.length < max) {
            setSelectedNumbers([...selectedNumbers, num]);
        }
    }

    return (
        <div className="numbers-wrapper">
            {numbers.map((num) => {
                const className = selectedNumbers.includes(num) ? 'number-selected' : 'number';
                return (
                    <div key={v4()} className={className} onClick={() => selectNumber(num)}>
                        {num}
                    </div>
                );
            })}
        </div>
    );
}

export default Numbers;

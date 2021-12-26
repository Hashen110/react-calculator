import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { evaluate } from 'mathjs';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            symbols: ['(', ')', '%', '/', 'x', '-', '+', '=', '.'],
            history: [],
            showHistory: false
        }
    }

    onClear = () => {
        if (this.props.onClear) {
            this.props.onClear(this.state.input, this.state.history)
        }
        this.setState({
            input: '',
            history: []
        })
    }

    onEqual = () => {
        const input = this.state.input
        try {
            const result = String(evaluate(this.state.input))
            this.setState({
                input: result,
                history: [...this.state.history, {input, result}]
            })
            if (this.props.onResult) {
                this.props.onResult(input, result)
            }
        } catch (e) {
            this.setState({
                input: 'Error',
                history: [...this.state.history, {input, result: 'Error'}]
            })
            if (this.props.onResult) {
                this.props.onResult(input, 'Error')
            }
        }
    }

    onButtonClick = (value) => {
        this.setState({
            input: this.state.input + value
        })
        if (this.props.onInputChange) {
            this.props.onInputChange(value, this.state.input)
        }
    }

    onKeyUp = (e) => {
        e.preventDefault()
        if (e.key === 'Backspace') {
            this.setState({
                input: this.state.input.slice(0, -1)
            })
        } else if (e.key === 'Enter') {
            this.onEqual()
        } else if (e.key === 'Escape') {
            this.onClear()
        } else if (e.key.match(/^\d+$/)) {
            this.onButtonClick(e.key)
        } else {
            for (let i = 0; i < this.state.symbols.length; i++) {
                if (e.key === this.state.symbols[i]) {
                    this.onButtonClick(e.key)
                    break
                }
            }
        }
    }

    onContextMenu = (e) => {
        if (!this.props.disableContextMenu) {
            e.preventDefault()
            if (this.state.showHistory) {}
        }
    }

    render() {
        return (
            <div id="react-calculator" onContextMenu={this.onContextMenu} onKeyUp={this.onKeyUp} style={{userSelect: 'none'}}>
                <div className="ui grid">
                    <div className="sixteen wide column" style={{padding: this.props.gap}}>
                        <div className={this.state.input === 'Error' ? 'ui massive input error fluid' : 'ui massive input focus fluid'}>
                            <input type="text" value={this.state.input} style={{textAlign: 'right'}} disabled={true} />
                        </div>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick('(')}>(</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick(')')}>)</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick('%')}>%</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={this.onClear}>AC</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('7')}>7</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('8')}>8</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('9')}>9</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick('/')}>/</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('4')}>4</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('5')}>5</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('6')}>6</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick('x')}>x</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('1')}>1</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('2')}>2</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('3')}>3</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick('-')}>-</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('0')}>0</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.numberButtonColor} onClick={() => this.onButtonClick('.')}>.</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.equalButtonColor} onClick={this.onEqual}>=</button>
                    </div>
                    <div className="four wide column" style={{padding: this.props.gap}}>
                        <button className={'fluid ui button ' + this.props.symbolButtonColor} onClick={() => this.onButtonClick('+')}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

const colors = ['', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

Calculator.propTypes = {
    numberButtonColor: PropTypes.oneOf(colors),
    symbolButtonColor: PropTypes.oneOf(colors),
    equalButtonColor: PropTypes.oneOf(colors),
    disableContextMenu: PropTypes.bool,
    gap: PropTypes.number,
    onInputChange: PropTypes.func,
    onResult: PropTypes.func,
    onClear: PropTypes.func,
};

Calculator.defaultProps = {
    numberButtonColor: '',
    symbolButtonColor: 'grey',
    equalButtonColor: 'blue',
    gap: 5
}

export default Calculator;
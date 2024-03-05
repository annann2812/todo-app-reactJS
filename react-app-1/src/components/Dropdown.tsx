import React from 'react';

interface DropdownProps {
    option: string[];
    title?: string;
    fn?: (message: string) => void;
    children?: string;
}

interface StateItem {
    isShow: boolean;
}

class Dropdown extends React.Component<DropdownProps, StateItem> {
    constructor(props: DropdownProps) {
        super(props);
        this.state = {
            isShow: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({ isShow: !prevState.isShow }));
    };

    mouseEnterHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event.currentTarget.textContent);
    };

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" onClick={this.handleClick}>
                    {this.props.title || this.props.children || "this is dropdown"}
                </button>
                <div className={`dropdown-menu ${this.state.isShow ? 'show' : ""}`}>
                    {this.props.option.map((opt: string, index: number) => (
                        <a key={index} href='#' className='dropdown-item ' onClick={() => {
                            if (this.props.fn) {
                                this.props.fn(`you selected ${opt}`);
                            }
                        }}>{opt}</a>
                    ))}

                </div>
            </div>
        );
    }
}

export default Dropdown;
import React, { Component, Fragment } from 'react'

interface LifeCycleState {
    favoritesColor?: string;
    isShow?: boolean;
}
interface LifeCycleProps {
    myColor?: string;
}

// End Define State

export class LifeCycle extends Component <LifeCycleProps, LifeCycleState> {

    // mounting
    // contructor is method initialized component
    constructor (props: LifeCycleProps) {
        super(props)
        console.log("1. constructor")

        this.state = { favoritesColor: "red", isShow: true };
    }

    static getDerivedStateFromProps(newProps: LifeCycleProps, prevState: LifeCycleState) {
        console.log("2. getDerivedStateFromProps")
        console.log(`props: ${JSON.stringify(newProps)} - state: ${JSON.stringify(prevState)}`)

        if(newProps.myColor !== prevState.favoritesColor) {
            // return { favoritesColor: newProps.myColor }
        }
        return null;
    }

    unmounting = () => {
        this.setState({ isShow: false });
    }


  render() {
      console.log("3.render")
    return (
        <Fragment>
            {this.state.isShow ? <Unmount /> : null}
            <button type='button' onClick={this.unmounting}>Unmount Component</button>
            <hr />
            <h2 style={{color: this.state.favoritesColor}}>LifeCycle Method</h2>
            <h3 id='element-1'>----</h3>
            <h3 id='element-2'>----</h3>
        </Fragment>
    )
  }
  componentDidMount(): void {
      console.log("4. componentDidMount");
      setTimeout(() => {
        this.setState({ favoritesColor: "purple"});
      }, 3000);
  }

  shouldComponentUpdate(nextProps: Readonly<LifeCycleProps>, nextState: Readonly<LifeCycleState>, nextContext: any): boolean {
      console.log("2. updating: shouldComponentUpdate");
      console.log("nextProps: ", nextProps);
      console.log("nextState: ", nextState);
      console.log("nextContext: ", nextContext);
      return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<LifeCycleProps>, prevState: Readonly<LifeCycleState>) {
      console.log("4. updating: getSnapshotBeforeUpdate");
      const h3 = document.getElementById("element-1")!;

      return (h3.innerHTML = `before the update , the fav color was ${JSON.stringify(prevState)}`)
  }

  componentDidCatch(): void {
      console.log("5. updating: componentDidCatch")
      const h3 = document.getElementById("element-2")!;

      h3.innerHTML = `the fav color is ${this.state.favoritesColor}`;
  }
}

export default LifeCycle;

class Unmount extends Component {
    componentWillUnmount(): void {
        console.log("5. unmounting: componentWillUnMount");
        alert("the component will be unmounted")
    }

    render () {
        return <h2>waiting unmount</h2>
    }
}
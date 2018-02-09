import React from "react";

const canUseDOM = typeof window !== "undefined";

export const clientOnly = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            if(!canUseDOM){
                return null;
            }
            return <WrappedComponent {...this.props} />
        }
    }
 }
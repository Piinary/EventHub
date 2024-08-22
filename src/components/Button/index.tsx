import React, { Children } from 'react';
interface Props {
    callback: () => void,
    icon: Object
}
function Button(props: Props, children: {children: React.ReactNode}) {
    return ( <>{children}</> );
}

export default Button;
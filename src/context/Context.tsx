import {Color} from './ColorContext';

type ColorProps = {
    children: React.ReactNode;
};

export default function UserContextProvider({ children }: ColorProps) {

    return <Color.Provider value="blue">
        {children}
    </Color.Provider>;
}
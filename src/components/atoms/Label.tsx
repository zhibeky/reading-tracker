import {FC, ReactNode} from "react";

type LabelProps = {
    children: ReactNode;
};

export const Label: FC<LabelProps> = ({children}) => (
    <label className="text-sm font-sans font-medium text-gray-700">
        {children}
    </label>
);
import { ReactNode } from "react"

export interface HeaderLayoutPropsI{
    title?: String
}

export interface LayoutPropsI extends HeaderLayoutPropsI{
    children: ReactNode
    title?: String
}
import styled from '@emotion/styled';

type RuneProps = {
    scale: number;
}

export const RuneStyle = styled.div<RuneProps>`
    filter: grayscale(${(props: RuneProps) => props.scale}%)
`
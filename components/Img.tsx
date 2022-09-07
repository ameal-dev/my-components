import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.div<{
	absolute?: boolean;
	width?: string;
	inset?: string;
}>`
	position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
	inset: ${({ inset }) => (inset ? inset : "")};
	cursor: pointer;
`;

export const Img = ({ src, alt, width, absolute, inset }) => {
	return (
		<ImgWrapper absolute={absolute} inset={inset}>
			<img src={src} alt={alt} width={width} />
		</ImgWrapper>
	);
};

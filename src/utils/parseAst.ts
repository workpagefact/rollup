import { parse, parseAsync } from '../../native';
import type { ParseAst, ParseAstAsync } from '../rollup/types';
import { convertProgram } from './bufferToAst';
import getReadStringFunction from './getReadStringFunction';

export const parseAst: ParseAst = (
	input,
	{ allowReturnOutsideFunction = false, jsx = false } = {}
) => {
	const astBuffer = parse(input, allowReturnOutsideFunction, jsx);
	return convertProgram(astBuffer.buffer, getReadStringFunction(astBuffer));
};

export const parseAstAsync: ParseAstAsync = async (
	input,
	{ allowReturnOutsideFunction = false, jsx = false, signal } = {}
) => {
	const astBuffer = await parseAsync(input, allowReturnOutsideFunction, jsx, signal);
	return convertProgram(astBuffer.buffer, getReadStringFunction(astBuffer));
};

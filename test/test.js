import addFunction from '../src/addition.js';
import chai from 'chai';

const {expect} = chai;

describe('Addition of two numbers',()=>{
	describe('Valid output',()=>{
		it('should result 5',()=>{
			expect(addFunction.additionTwoNumber(3,2)).to.be.eql(5);
		});

		it('should result 5',()=>{
			expect(addFunction.additionTwoNumber(3,3)).to.be.eql(6);
		});

		it('should result 5',()=>{
			expect(addFunction.additionTwoNumber(3,4)).to.be.eql(7);
		});

		it('should result 5',()=>{
			expect(addFunction.additionTwoNumber(3,5)).to.be.eql(8);
		});
	});
});
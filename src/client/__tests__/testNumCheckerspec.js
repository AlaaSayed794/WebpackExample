import { handleSubmit } from '../js/formHandler'
import { checkForNumber } from '../js/numChecker'

describe("testing num checker ", () => {

    test('defined', () => {
        expect(checkForNumber).toBeDefined()
    })
    test('invalid num', () => {
        expect(checkForNumber("fgfg")).toBeFalsy()
    })
    test('valid num', () => {
        expect(checkForNumber(11)).toBeTruthy()
    })
})
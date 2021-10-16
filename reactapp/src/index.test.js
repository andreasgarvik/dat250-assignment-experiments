const rewire = require("rewire")
const index = rewire("./index")
const Game = index.__get__("Game")

const calculateWinner = index.__get__("calculateWinner")
// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Jean-Philippe", "Michael"], ["Edmond", "Jean-Philippe", "George"], ["George", "Pierre Edouard", "Jean-Philippe"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("jumpTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "George"], ["George", "Anas", "Jean-Philippe"], ["George", "Edmond", "Michael"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.jumpTo(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.jumpTo(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.jumpTo(500)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.jumpTo(3.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.jumpTo(5.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.jumpTo(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            calculateWinner(["Jean-Philippe", "Michael", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculateWinner(["Michael", "Edmond", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculateWinner(["Edmond", "George", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculateWinner(["Pierre Edouard", "Pierre Edouard", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculateWinner(["Pierre Edouard", "Jean-Philippe", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

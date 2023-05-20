const Employee = require("../library/Employee");
const Engineer = require("../library/Engineer");

describe("Engineer subclass", () => {
    describe("Properties", () => {
        it("GitHub", () => {
            const gitHub = "GillsGits";
            const engineer = new Engineer("Gill", 10, "Gill@dentist-aquarium.net", gitHub);

            expect(engineer.gitHub).toEqual("GillsGits");
        });
    });
    
    describe("Methods", () => {
        it(".getGitHub()", () => {
            const gitHub = "BubblesBuilds";
            const engineer = new Engineer("Bubbles", 11, "Bubbles@dentist-aquarium.net", gitHub);

            expect(engineer.getGitHub()).toEqual("BubblesBuilds");
        });

        it(".getRole()", () => {
            const gitHub = "PeachtheStarFish";
            const engineer = new Engineer("Peach", 12, "Peach@dentist-aquarium.net", gitHub);

            expect(engineer.getRole()).toEqual("Engineer");
        })
    });

    describe("Inheritance", () => {
        it("Properties", () => {
            const name = "Marlin";
            const engineer = new Engineer(name);
      
            expect(engineer.name).toEqual("Marlin");
        });

        it("Method", () => {
            const name = "Nemo";
            const engineer = new Engineer(name);

            expect(engineer.getName()).toEqual("Nemo");
        });

        it("Is an instance of Employee", () => {
            const name = "Dory";
            const engineer = new Engineer(name);

            expect(engineer).toBeInstanceOf(Employee);
        })
    })
})

import LearningInstancePage from "../pages/learningInstancePage";
const learningInstancePage = new LearningInstancePage();

describe("Create Learning Instance with Field", () => {
  before(() => {
    cy.login(); 
  });

  it("should create a learning instance and add field", () => {
    cy.fixture("testData").then((data) => {
      learningInstancePage
        .navigateToLearningInstances()
        .openCreateDialog()
        .fillBasicInfo(data.learningInstance.name, data.learningInstance.description)
        .selectUserDefinedType()
        .clickNext()
        .verifyCreation(data.learningInstance.name)
        .addCustomField(data.learningInstance.fieldName, data.learningInstance.fieldLabel)
        .goHomeAndVerify(data.learningInstance.name);

    });
  });

  after(() => {
    cy.logout();
  });
});
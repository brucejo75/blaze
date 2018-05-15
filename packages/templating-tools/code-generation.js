TemplatingTools.generateDynTemplateJS =
function generateTemplateJS(name, renderFuncCode) {
  let dynName = name !== 'Template' ? 'app_' + name : name;
  const nameLiteral = JSON.stringify(dynName);
  const templateDotNameLiteral = JSON.stringify(`Template.${dynName}`);

  return `
Template[${nameLiteral}] = new Template(${templateDotNameLiteral}, ${renderFuncCode});
`;
}

TemplatingTools.generateTemplateJS =
function generateTemplateJS(name, renderFuncCode) {
  const nameLiteral = JSON.stringify(name);
  const templateDotNameLiteral = JSON.stringify(`Template.${name}`);

  return `
Template.__checkName(${nameLiteral});
Template[${nameLiteral}] = new Template(${templateDotNameLiteral}, ${renderFuncCode});
`;
}

TemplatingTools.generateBodyJS =
function generateBodyJS(renderFuncCode) {
  return `
Template.body.addContent(${renderFuncCode});
Meteor.startup(Template.body.renderToDocument);
`;
}

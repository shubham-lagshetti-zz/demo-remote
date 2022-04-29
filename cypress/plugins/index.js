/// <reference types="cypress"  />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
 const shell = require("shelljs");
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

  // username and pwd is required for azure login
  let username = "parameswar.mondal@cloudticity.com";
  let pwd = "6>v$c4(6Y@tQs(g^ZX/4pmfis";
  let location = "eastus";
  let rgName = "o2cyautomation";
  let storageName = "o2oxpmdctest";
  let subscriptionName = "QA";
  // storageName = (storageName.length > 23) ? storageName.substr(0, 23) : storageName;
  // console.log('storageName ', storageName);

  on('task', {
    startTmds() {
      
  
      // azure login
      let azLogin = shell.exec(`az login -u "${username}" -p "${pwd}"`).stdout;
      console.log('azLogin ', JSON.parse(azLogin));

      // set azure subscription
      let azSetSubscription = shell.exec(`az account set --subscription "${subscriptionName}"`).stdout;
      console.log('azSetSubscription ', azSetSubscription);

      // // show azure account
      // let azSelectedSubscription = shell.exec('az account show --output table').stdout;
      // console.log('azSelectedSubscription ', azSelectedSubscription);

      // create azure resource group
      let azCreateRg = shell.exec(`az group create -l "${location}" -n "${rgName}"`).stdout;
      console.log('azCreateRg ', azCreateRg);

      // create storage account
      let azCreateStorage = shell.exec(`az storage account create -n "${storageName}" -g "${rgName}" -l "${location}" --sku "Standard_LRS"`).stdout;
      console.log('azCreateStorage ', azCreateStorage);

      return null
    },
    endTmds() {
      // azure login
      let azLogin = shell.exec(`az login -u "${username}" -p "${pwd}"`).stdout;
      console.log('azLogin ', JSON.parse(azLogin));

      // set azure subscription
      let azSetSubscription = shell.exec(`az account set --subscription "${subscriptionName}"`).stdout;
      console.log('azSetSubscription ', azSetSubscription);

      // // show azure account
      // let azSelectedSubscription = shell.exec('az account show --output table').stdout;
      // console.log('azSelectedSubscription ', azSelectedSubscription);

      // delete resource group
      let azDeleteSRg = shell.exec(`az group delete --name "${rgName}" --yes`).stdout;
      console.log('azDeleteSRg ', azDeleteSRg);

      return null
    },
  });

}
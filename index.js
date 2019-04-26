// Write your solution in this file!
const driver = {}


function updateDriverWithKeyAndValue(driver, key, value){
  const results = Object.assign({}, driver, {[key]: value})
  return results
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const results = Object.assign({}, driver)
  delete results[key]
  return results
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}

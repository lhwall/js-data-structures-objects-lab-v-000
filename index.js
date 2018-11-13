// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
  newObject = Object.assign({}, driver, {[key]: value})
  return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver,key){
  const newObject = Object.assign({}, driver)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
}

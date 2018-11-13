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

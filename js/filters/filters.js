/**
 * Created by liangjiajie on 16/1/21.
 */
angular.module('lsApp')
    .filter('paging', function() {
        return function (items, index, pageSize) {
            if (!items)
                return [];
            var offset = (index - 1) * pageSize;
            return items.slice(offset, offset + pageSize);
        }
    })
    .filter('pagesize', function() {
        return function (items) {
            if (!items)
                return 0;
            return items.length || 0
        }
    })
    .filter('filterJob',function(){
        var iterationData = function(obj,placeVal,typeVal,productVal){
            var objArray = [];
            if(placeVal == '' && typeVal == '' &&  productVal == ''){
                objArray = obj;
                return objArray;
            }else if(placeVal != '' && typeVal == '' &&  productVal == ''){
                if(placeVal === '全部'){
                    return obj;
                }else{
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }

            }else if(placeVal != '' && typeVal != '' && productVal ==''){
                if(placeVal === '全部' && typeVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(typeVal == item.jobType){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal === '全部' && typeVal === '全部' ){
                    return obj;
                }else if(placeVal != '全部' && typeVal === '全部' ){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal != '全部' && typeVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace && typeVal == item.jobType){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }

            }else if(placeVal != '' && typeVal == '' && productVal != ''){
                if(placeVal == '全部' && productVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                } else if(placeVal == '全部' && productVal == '全部'){

                    return obj;
                } else if(placeVal != '全部' && productVal == '全部'){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }
                angular.forEach(obj,function(item,key){
                    if(placeVal == item.jobPlace && productVal == item.jobProduct){
                        objArray.push(obj[key]);
                    }
                })
                return objArray;
            }else if(placeVal !='' && typeVal != '' && productVal != ''){
                if(placeVal =='全部' && typeVal == '全部' && productVal == '全部'){
                    return obj;
                }else if(placeVal =='全部' && typeVal != '全部' && productVal == '全部'){
                    angular.forEach(obj,function(item,key){
                        if( typeVal == item.jobType){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal =='全部' && typeVal == '全部' && productVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal !='全部' && typeVal == '全部' && productVal == '全部'){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal !='全部' && typeVal == '全部' && productVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace && productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal !='全部' && typeVal != '全部' && productVal == '全部'){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace  && typeVal == item.jobType){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal =='全部' && typeVal != '全部' && productVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(typeVal == item.jobType && productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(placeVal !='全部' && typeVal != '全部' && productVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(placeVal == item.jobPlace  && typeVal == item.jobType && productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }

            }else if(placeVal == '' && typeVal != '' && productVal == ''){
                if(typeVal == '全部'){
                    return obj;
                }
                angular.forEach(obj,function(item,key){
                    if(typeVal == item.jobType){
                        objArray.push(obj[key]);
                    }
                })
                return objArray;
            }else if(placeVal == '' && typeVal != '' && productVal != ''){
                if(typeVal == '全部' && productVal == '全部'){
                    return obj;
                }else if(typeVal == '全部' && productVal != '全部'){
                    angular.forEach(obj,function(item,key){
                        if(productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else if(typeVal != '全部' && productVal == '全部'){
                    angular.forEach(obj,function(item,key){
                        if(typeVal == item.jobType){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }else{
                    angular.forEach(obj,function(item,key){
                        if(typeVal == item.jobType && productVal == item.jobProduct){
                            objArray.push(obj[key]);
                        }
                    })
                    return objArray;
                }
            }else if(placeVal == '' && typeVal == '' && productVal != ''){
                if(productVal == '全部'){
                    return obj;
                }
                angular.forEach(obj,function(item,key){
                    if(productVal == item.jobProduct){
                        objArray.push(obj[key]);
                    }
                })
                return objArray;
            }

        }
        return function(objData,params,type){
            if (!objData)
                return [];
            var placeVal = params.placeVal;
            var typeVal = params.typeVal;
            var productVal = params.productVal;
            var data = iterationData(objData,placeVal,typeVal,productVal);
            return data;
        }
    })
    .filter('filterHotAndNewJob',function(){
        return function(obj,params){
            if(typeof(params) == "undefined" || params == '')
            return obj;
            var objArray = [];
            angular.forEach(obj,function(item,key){
                if(params == item.job){
                    //console.log("-----"+JSON.stringify(item));
                    objArray.push(obj[key]);
                }
            })
            return objArray;
        }
    })
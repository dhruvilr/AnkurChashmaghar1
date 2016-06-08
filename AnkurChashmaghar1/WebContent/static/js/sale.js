/******************************************************************************************** 
							Page Load FlexBox Section
********************************************************************************************/

function fillCustomerFlexBox() {
	
	$.ajax({
				type : "GET",
				url : "listCustomer.htm",
				async : false,
				datatype : "application/json",
				cache : false,
				success : function(result) {
					
					customerList.results = result;
					customerList.total = customerList.results.length;
					if(customerList.results.length==0){
						alert("No customer entry found!\nPlease enter new customer.");
						return false;
					}
					
				}
			});

	$('#ffb2').flexbox(
			customerList,
			{
				showArrow : false,
				onSelect : function() {
					selectedCustomerId = $('input[name=ffb2]').val();
					selectedCustomertext = this.value;
					 $("#partyMasterId").val(
							selectedCustomerId); 
				}
			});
	$('#ffb4').flexbox(
			customerList,
			{
				showArrow : false,
				onSelect : function() {
					searchCustomerId = $('input[name=ffb4]').val();
					
					 $("#searchPartyMasterId").val(
							searchCustomerId); 
				}
			});
}

function fillItemFlexBox() {
	
	$.ajax({
				type : "GET",
				url : "listItem.htm",
				async : false,
				datatype : "application/json",
				cache : false,
				success : function(result) {
					itemList.results = result;
					itemList.total = itemList.results.length;
					if(itemList.results.length==0){
						alert("No item entry found!\nPlease enter new item.");
						return false;
					}
				}
			});
	$('#ffb3').flexbox(
			itemList,
			{
				showArrow : false,
				onSelect : function() {
					selectedItemId = $('input[name=ffb3]').val();
					selectedItemtext = this.value;
					getItemStock(selectedItemId);
					/* $("#partyMasterId").val(
							selectedBuyerId); */
				}
			});							
}

function fillReciptNoFlexBox() {
	  
	 $.ajax({
			type : "GET",
			url : "listReciptNo.htm",
			async : false,
			datatype : "application/json",
			cache : false,
			success : function(result) {
				
				reciptNoList.results = result;
				reciptNoList.total = reciptNoList.results.length;				
			}
		});

		 $('#ffb5').flexbox(reciptNoList, {
			showArrow: false,
			onSelect : function() {
				selectedReciptNo = this.value;
				 $("#searchReciptNo").val(
						 selectedReciptNo); 
			}
			
		});
}
function getItemStock(itemId){
	$.ajax({
		url : "getItemStockDetail.htm?itemId="+itemId,
        global: false,
        type: "POST",
        dataType: "json",
        contanttype: 'text/json',
        async:false,															
		cache : false,
		success: function(data) {	
						
			$("#openingStock").val(data.openingStock);
			$("#purchaseStock").val(data.purchaseStock);
			$("#purchaseReturnStock").val(data.purchaseReturnStock);
			$("#salesStock").val(data.salesStock);
			$("#salesReturnStock").val(data.salesReturnStock);
			$("#closingStock").val(data.closingStock);
			
		},
		error : function(e) {
			alert("error"+e);
		}					
	});
}
/******************************************************************************************** 
								Item Section
********************************************************************************************/
function editItem(rowId){							
	editItemQty= $("#item").getCell(rowId, "qty");
	editItemReturnQty= $("#item").getCell(rowId, "returnQty");
	editItemRate = $("#item").getCell(rowId, "rate");
	jQuery('#item').editRow(rowId);
}

function deleteItem(toDelete){							
	//alert("Selected Row :"+toDelete);
	var maxRows = jQuery("#item tr").length;
	if (toDelete != null) {
		var saleDetailId= $("#item").getCell(toDelete, "saleDetailId");
		if (maxRows > 1) {
			$("#item")
					.jqGrid(
							'delGridRow',
							toDelete,
							{
								url : 'deleteSaleDtl.htm?saleDetailId='+saleDetailId,
								reloadAfterSubmit : false
							});
			return true;
		}
	} else {
		alert("Please, Select a Row");
		return false;
	}
}

function saveItem(rowId) {																																		
	setTimeout(function(){								
		jQuery('#item').saveRow(rowId);								
		setTimeout(function(){									
			var qty= $("#item").getCell(rowId, "qty");
			var returnQty= $("#item").getCell(rowId, "returnQty");
			var returnDate= $("#item").getCell(rowId, "returnDate");
			var rate = $("#item").getCell(rowId, "rate");									
			if(parseFloat(returnQty)>parseFloat(qty)){
				alert("Return Qty must be less than or equal to order qty.");									
				resetEditRow(rowId);										
				return false;
			}else{
				
				var saleDetailId= $("#item").getCell(rowId, "saleDetailId");
				if(saleDetailId!=-1){
					$.ajax({
						type : "POST",
						url : "editSaleDtl.htm?saleDetailId="+saleDetailId+"&qty="+qty+"&returnQty="+returnQty+"&rate="+rate+"&returnDate="+returnDate,
						async : false,
						datatype : "application/text",
						cache : false,
						success: function(result) {			
							doItemTotal(rowId);
						},
						error : function(e) {
							resetEditRow(rowId);
							alert("error"+e);
						}					
					});	
				}else{											
					doItemTotal(rowId);
				}																																								
			}									
		},250);
	},100);																																						
}

function resetEditRow(rowId){
															    					
	jQuery("#item").jqGrid('setRowData',rowId,{qty:editItemQty,returnQty:editItemReturnQty,rate:editItemRate});
	
	jQuery('#item').saveRow(rowId);
	
	jQuery('#item').editRow(rowId);
	
}

function doItemTotal(rowId){
	var rate = $("#item").getCell(rowId, "rate");
	var qty= $("#item").getCell(rowId, "qty");
	var returnQty= $("#item").getCell(rowId, "returnQty");
	var saleAmount=parseFloat(qty)*parseFloat(rate);
	var saleReturnAmount=parseFloat(returnQty)*parseFloat(rate);
	//var totalAmount=saleAmount-saleReturnAmount;
	var totalAmount=saleAmount;
								
	jQuery("#item").jqGrid('setRowData',rowId,{saleamt:saleAmount,returnamt:saleReturnAmount,totalamt:totalAmount});
																				
	var saleSum = jQuery("#item").jqGrid('getCol','saleamt',false,'sum');
    $("#saleamt").val(saleSum);
                           
    var saleReturnsum = jQuery("#item").jqGrid('getCol','returnamt',false,'sum');
    $("#returnAmt").val(saleReturnsum);
    
    var totalSum = jQuery("#item").jqGrid('getCol','totalamt',false,'sum');
    $("#totalAmt").val(totalSum);
    
    jQuery("#item").jqGrid('footerData','set',{rate:'Total Amount :',saleamt:saleSum,returnamt:saleReturnsum,totalamt:totalSum});
}

function resetItem() {
	selectedItemId = "0";
	selectedCustomertext = "";
	$("#qty").val('');
	$("#rate").val('');
	$("#ffb3").empty();
	$('#ffb3').flexbox(
			itemList,
			{
				showArrow : false,
				onSelect : function() {
					selectedItemId = $(
							'input[name=ffb3]').val();
					selectedItemtext = this.value;
				}
			});
}

function validateQty(value, colname){                                           
    /* if(duration.length==0){
        return [false,'Value Can Not Be Blank.'];
    }
    if(duration.length>0){                        
        if(!isNumeric(duration)){
            return [false,'Value should be numeric !'];
        }
        if(!regValidateDigit.test(duration)){
            return [false,'Value should not be negative and should not be greater than 99'];
        }
    }
    if(duration.length>3){
        return [false,'Max Value should be 999!'];
    } */
    
    //alert(value);
    //alert(colname);
    						    						   
    
    return [true,''];
}
function validateReturnQty(value, colname){                                           
    /* if(duration.length==0){
        return [false,'Value Can Not Be Blank.'];
    }
    if(duration.length>0){                        
        if(!isNumeric(duration)){
            return [false,'Value should be numeric !'];
        }
        if(!regValidateDigit.test(duration)){
            return [false,'Value should not be negative and should not be greater than 99'];
        }
    }
    if(duration.length>3){
        return [false,'Max Value should be 999!'];
    } */
    
    //alert(value);
    //alert(colname);
    
    
    /* var thisId=$.jgrid.jqID(this.id);
    var qty = $("#item").getCell(thisId, "quantity");    
    alert(qty); */
    
    return [true,''];
}
function validateRate(value, colname){                                           
    /* if(duration.length==0){
        return [false,'Value Can Not Be Blank.'];
    }
    if(duration.length>0){                        
        if(!isNumeric(duration)){
            return [false,'Value should be numeric !'];
        }
        if(!regValidateDigit.test(duration)){
            return [false,'Value should not be negative and should not be greater than 99'];
        }
    }
    if(duration.length>3){
        return [false,'Max Value should be 999!'];
    } */
    
    //alert(value);
    //alert(colname);
    
    
    /* var thisId=$.jgrid.jqID(this.id);
    var qty = $("#item").getCell(thisId, "quantity");    
    alert(qty); */
    
    /* var thisId=$.jgrid.jqID(this.id); 
    var myval = $("#qty","#item"+thisId).val();
    alert (myval); */
    
    //var selr = jQuery('#item').jqGrid('getGridParam', 'selrow');
    
    
    return [true,''];
}
/******************************************************************************************** 
									Payment Section
*********************************************************************************************/
function addReceivedPayment(){
	
	var amt=$("#amount").val();
	var type=paymentType;
	
	var reciptNo = $("#reciptNo").val();							
	var paymentDate=$("#paymentDate").val();
	var chequeNo;
	var bankName;
	if(type=="Cheque")
	{
		chequeNo=$("#chequeNo").val();
		bankName=$("#bankName").val();
	}else {
		chequeNo="";
		bankName="";
	}
		
	$.ajax({
		type : "POST",
		url : "addSalesRecipt.htm?amount="+amt+"&type="+type+"&chequeNo="+chequeNo+"&bankName="+bankName+"&reciptNo="+reciptNo+"&paymentDate="+paymentDate,
		async : false,
		datatype : "application/text",
		cache : false,
		success: function(result) {			
			reloadPaymentGrid();
		},
		error : function(e) {
			alert("error"+e);
		}					
	});		
}
function deletePayment(toDelete){
	var maxRows = jQuery("#recipt tr").length;
	if (toDelete != null) {						
		var reciptId = $("#recipt").getCell(toDelete, "reciptId");
		if (maxRows > 1) {
			$("#recipt")
					.jqGrid(
							'delGridRow',
							toDelete,
							{
								url : 'deleteRecipt.htm?reciptId='+reciptId,
								afterComplete:function(){
									reloadPaymentGrid();
								}
							});
			//reloadGrids();
			return true;
		}
	} else {
		alert("Please, Select a Row");
		return false;
	}
}
function reloadPaymentGrid(){
	var reciptNo = $("#reciptNo").val();
	
	$.ajax({
		url : "getSalesAmtDetail.htm?reciptNo="+reciptNo,
        global: false,
        type: "POST",
        dataType: "json",
        contanttype: 'text/json',
        async:false,															
		cache : false,
		success: function(data) {	
			
			$("#rpdReceiptNo").val(reciptNo);
			$("#rpdSaleAmt").val(data.SaleAmt);
			$("#rpdReturnAmt").val(data.ReturnAmt);
			$("#rpdReceivedAmt").val(data.ReceivedAmt);
			$("#rpdPendingAmt").val(data.PendingAmt);
			$("#rpdTotalAmt").val(data.TotalAmt);
			
		},
		error : function(e) {
			alert("error"+e);
		}					
	});
	
	setTimeout(function(){
		jQuery("#recipt").jqGrid().setGridParam({url:'getReciptNoSalesReciptList.htm?reciptNo='+reciptNo,datatype:'json',page:1}).trigger("reloadGrid");
	},500);
																	
	return true;
 }
/******************************************************************************************** 
								Final Submit Section
*********************************************************************************************/
function getItemData() {
	var itemGridIds = jQuery("#item").getDataIDs();
	if (itemGridIds.length > 0) {

		var tempIndex = 0;
		var arr = new Array();

		for ( var index = 0; index < itemGridIds.length; index++) {
			//Columns Values!!
			var rowData = jQuery('#item').getRowData(
					itemGridIds[index]);
			arr[tempIndex] = rowData.saleDetailId;
			arr[++tempIndex] = rowData.itemid;
			arr[++tempIndex] = rowData.qty;
			arr[++tempIndex] = rowData.returnQty;
			arr[++tempIndex] = rowData.returnDate;
			arr[++tempIndex] = rowData.rate;
			tempIndex++;
		}

		$("#itemData").val(arr);

	}

}
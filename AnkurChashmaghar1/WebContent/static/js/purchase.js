/******************************************************************************************** 
							Page Load FlexBox Section
********************************************************************************************/

function fillOrderNoFlexBox() {							  
	 $.ajax({
			type : "GET",
			url : "listOrderNo.htm",
			async : false,
			datatype : "application/json",
			cache : false,
			success : function(result) {
				orderNoList.results = result;
				orderNoList.total = orderNoList.results.length;	
				
				/*if(orderNoList.results.length==0){
					alert("NO purchase entry exists for payments!");
					return false;
				}*/
			}
		});

		$('#ffb4').flexbox(orderNoList, {
			showArrow: false,
			onSelect : function() {
				//selectedBuyerId = $('input[name=ffb2]').val();
				selectedOrderNo = this.value;
				 $(".ordNo1").val(
						 selectedOrderNo); 
			}
			
		});
}
function fillSearchBuyerFlexBox() {

	$.ajax({
				type : "GET",
				url : "listBuyer.htm",
				async : false,
				datatype : "application/json",
				cache : false,
				success : function(result) {
					searchBuyerList.results = result;
					searchBuyerList.total = searchBuyerList.results.length;
					if (searchBuyerList.results.length == 0) {
						alert("No buyer entry found!\nPlease enter new buyer.");
						return false;
					}
				}
			});
	$('#ffb5').flexbox(
			searchBuyerList,
			{
				showArrow : false,
				onSelect : function() {
					searchSelectedBuyerId = $(
							'input[name=ffb5]').val();
					searchSelectedBuyertext = this.value;
					$("#searchPartyMasterId").val(
							searchSelectedBuyerId);
				}
			});
}

function fillBuyerFlexBox() {

	$.ajax({
				type : "GET",
				url : "listBuyer.htm",
				async : false,
				datatype : "application/json",
				cache : false,
				success : function(result) {
					buyerList.results = result;
					buyerList.total = buyerList.results.length;
					if (buyerList.results.length == 0) {
						alert("No buyer entry found!\nPlease enter new buyer.");
						return false;
					}
				}
			});
	jQuery('#ffb2').flexbox(
			buyerList,
			{
				showArrow : false,
				onSelect : function() {
					selectedBuyerId = $(
							'input[name=ffb2]').val();
					selectedBuyertext = this.value;
					$("#partyMasterId").val(
							selectedBuyerId);
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
					if (itemList.results.length == 0) {
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
					selectedItemId = $(
							'input[name=ffb3]').val();
					selectedItemtext = this.value;
					
					getItemStock(selectedItemId);
					$("#itemMasterId").val(selectedItemId);					
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
function validateQty(value, colname) {
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
	return [ true, '' ];
}
function validateReturnQty(value, colname) {
	/* if(duration.length==0){
	    return [false,'Value Can Not Be Blank.'];-
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

	return [ true, '' ];
}
function validateRate(value, colname) {
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
	return [ true, '' ];
}

function editItem(rowId) {
	editItemQty = $("#item").getCell(rowId, "qty");
	editItemReturnQty = $("#item").getCell(rowId,
			"returnQty");
	editItemRate = $("#item").getCell(rowId, "rate");
	jQuery('#item').editRow(rowId);
}

function deleteItem(toDelete) {
	//alert("Selected Row :"+toDelete);
	var maxRows = jQuery("#item tr").length;
	if (toDelete != null) {
		var purchaseDetailId = $("#item").getCell(
				toDelete, "purchaaseDetailId");
		if (maxRows > 1) {
			$("#item")
					.jqGrid(
							'delGridRow',
							toDelete,
							{
								url : 'deletePurchaseDtl.htm?purchaseDetailId='
										+ purchaseDetailId,
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
	setTimeout(function() {
		jQuery('#item').saveRow(rowId);
		setTimeout(function() {
			var qty = $("#item").getCell(rowId,"qty");
			var returnQty = $("#item").getCell(rowId,"returnQty");
			var returnDate= $("#item").getCell(rowId, "returnDate");
			var rate = $("#item").getCell(rowId,"rate");
			if (parseFloat(returnQty) > parseFloat(qty)) {
				alert("Return Qty must be less than or equal to order qty.");
				resetEditRow(rowId);
				return false;
			} else {
				var purchaseDetailId = $("#item").getCell(rowId,"purchaaseDetailId");
				if (purchaseDetailId != -1) {
					$.ajax({
						type : "POST",
						url : "editPurchaseDtl.htm?purchaseDetailId="+ purchaseDetailId+ "&qty="+ qty+ "&returnQty="+ returnQty+ "&rate="+ rate+"&returnDate="+returnDate,
						async : false,
						datatype : "application/text",
						cache : false,
						success : function(result) {
							doItemTotal(rowId);
						},
						error : function(
								e) {
							resetEditRow(rowId);
							alert("error"
									+ e);
						}
					});
				} else {
					doItemTotal(rowId);
				}
			}
				}, 250);
	}, 100);
}

function resetEditRow(rowId) {

	jQuery("#item").jqGrid('setRowData', rowId, {
		qty : editItemQty,
		returnQty : editItemReturnQty,
		rate : editItemRate
	});

	jQuery('#item').saveRow(rowId);

	jQuery('#item').editRow(rowId);

}

function doItemTotal(rowId) {
	var rate = $("#item").getCell(rowId, "rate");
	var qty = $("#item").getCell(rowId, "qty");
	var returnQty = $("#item").getCell(rowId,
			"returnQty");
	var purchaseAmount = parseFloat(qty)
			* parseFloat(rate);
	var purchaseReturnAmount = parseFloat(returnQty)
			* parseFloat(rate);
	var totalAmount = purchaseAmount
			- purchaseReturnAmount;

	jQuery("#item").jqGrid('setRowData', rowId, {
		purchaseamt : purchaseAmount,
		returnamt : purchaseReturnAmount,
		totalamt : totalAmount
	});

	var purchaseSum = jQuery("#item").jqGrid('getCol',
			'purchaseamt', false, 'sum');
	$("#purchaseAmt").val(purchaseSum);

	var purchaseReturnsum = jQuery("#item").jqGrid(
			'getCol', 'returnamt', false, 'sum');
	$("#returnAmt").val(purchaseReturnsum);

	var totalSum = jQuery("#item").jqGrid('getCol',
			'totalamt', false, 'sum');
	$("#totalAmt").val(totalSum);

	jQuery("#item").jqGrid('footerData', 'set', {
		rate : 'Total Amount :',
		purchaseamt : purchaseSum,
		returnamt : purchaseReturnsum,
		totalamt : totalSum
	});
}

function resetItem() {
	selectedItemId = "0";
	selectedCustomertext = "";
	$("#qty").val('');
	$("#rate").val('');
	$("#itemMasterId").val('');
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

/******************************************************************************************** 
									Payment Section
*********************************************************************************************/
function addPayment(){
	var paymentDate = $("#paymentDate").val();
	var amt=$("#amount").val();
	var type=paymentType;			
	var orderNo = $("#paymentOrderNo").val();
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
		url : "addPurchasePayment.htm?amount="+amt+"&type="+type+"&chequeNo="+chequeNo+"&bankName="+bankName+"&orderNo="+orderNo+"&paymentDate="+paymentDate,
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
	//alert("Selected Row :"+toDelete);
	var maxRows = jQuery("#payment tr").length;
	if (toDelete != null) {
		var paymentId = $("#payment").getCell(toDelete, "paymentId");
		if (maxRows > 1) {
			$("#payment")
					.jqGrid(
							'delGridRow',
							toDelete,
							{
								url : 'deletePayment.htm?paymentId='+paymentId,												
								afterComplete:function(){
									reloadGrids();
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
	var orderNo = $("#paymentOrderNo").val();
	
	$.ajax({
		url : "getPurchaseAmtDetail.htm?orderNo="+orderNo,
        global: false,
        type: "POST",
        dataType: "json",
        contanttype: 'text/json',
        async:false,															
		cache : false,
		success: function(data) {	
			
			$("#pdOrderNo").val(orderNo);
			$("#pdPurchaseAmt").val(data.PurchaseAmt);
			$("#pdReturnAmt").val(data.ReturnAmt);
			$("#pdPaymentAmt").val(data.PaymentAmt);
			$("#pdPendingAmt").val(data.PendingAmt);
			$("#pdTotalAmt").val(data.TotalAmt);
			
		},
		error : function(e) {
			alert("error"+e);
		}					
	});
	
	setTimeout(function(){
		jQuery("#payment").jqGrid().setGridParam({url:'getOrderNoPurchasePaymentList.htm?orderNo='+orderNo,datatype:'json',page:1}).trigger("reloadGrid");
	},250);
																	
	return true;
 }
/******************************************************************************************** 
								Search Section
*********************************************************************************************/
function resetSearch(){
	$("#startDate").val("");
	 $("#endDate").val("");
	 $(".ordNo1").val("");
	 $("#ffb4_input").val("");
	 $("#ffb5_input").val("");
	 $("#searchPartyMasterId").val("");
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
			arr[tempIndex] = rowData.purchaaseDetailId;
			arr[++tempIndex] = rowData.itemid;
			arr[++tempIndex] = rowData.qty;
			arr[++tempIndex] = rowData.returnQty;
			arr[++tempIndex] = rowData.rate;
			tempIndex++;
		}

		$("#itemData").val(arr);

	}

}
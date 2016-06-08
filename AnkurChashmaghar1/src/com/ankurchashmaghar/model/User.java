package com.ankurchashmaghar.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {

	@Id
	@GeneratedValue
	@Column(name="userId")
	private int userId;
	
	@Column(name="userName")
	private String userName;

	@Column(name="mobileNo")
	private String mobileNo;

	@Column(name="residentNo")
	private String residentNo;
	
	@Column(name="address")
	private String address;
	
	@Column(name="date")
	private String date;
	
	@Column(name="frame")
	private String frame;
	
	@Column(name="glass")
	private String glass;
	
	@Column(name="contactLense")
	private String contactLense;
	
	@Column(name="userRemarks")
	private String userRemarks;
	
	@Column(name="pendingAmount")
	private String pendingAmount;
	
	@Column(name="reSph1")
	private String reSph1;
	
	@Column(name="reCyl1")
	private String reCyl1;
	
	@Column(name="reAxis1")
	private String reAxis1;
	
	@Column(name="reVA1")
	private String reVA1;
	
	@Column(name="leSph1")
	private String leSph1;
	
	@Column(name="leCyl1")
	private String leCyl1;
	
	@Column(name="leAxis1")
	private String leAxis1;
	
	@Column(name="leVA1")
	private String leVA1;

	@Column(name="reSph2")
	private String reSph2;
	
	@Column(name="reCyl2")
	private String reCyl2;
	
	@Column(name="reAxis2")
	private String reAxis2;
	
	@Column(name="reVA2")
	private String reVA2;
	
	@Column(name="leSph2")
	private String leSph2;
	
	@Column(name="leCyl2")
	private String leCyl2;
	
	@Column(name="leAxis2")
	private String leAxis2;
	
	@Column(name="leVA2")
	private String leVA2;
	
	
	@Column(name="reSph3")
	private String reSph3;
	
	@Column(name="reCyl3")
	private String reCyl3;
	
	@Column(name="reAxis3")
	private String reAxis3;
	
	@Column(name="reVA3")
	private String reVA3;
	
	@Column(name="leSph3")
	private String leSph3;
	
	@Column(name="leCyl3")
	private String leCyl3;
	
	@Column(name="leAxis3")
	private String leAxis3;
	
	@Column(name="leVA3")
	private String leVA3;
	
	
	
	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}


	public String getResidentNo() {
		return residentNo;
	}


	public void setResidentNo(String residentNo) {
		this.residentNo = residentNo;
	}


	public String getFrame() {
		return frame;
	}

	
	
	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public void setFrame(String frame) {
		this.frame = frame;
	}


	public String getGlass() {
		return glass;
	}


	public void setGlass(String glass) {
		this.glass = glass;
	}


	public String getContactLense() {
		return contactLense;
	}


	public void setContactLense(String contactLense) {
		this.contactLense = contactLense;
	}


	
	public String getUserRemarks() {
		return userRemarks;
	}


	public void setUserRemarks(String userRemarks) {
		this.userRemarks = userRemarks;
	}


	public String getPendingAmount() {
		return pendingAmount;
	}


	public void setPendingAmount(String pendingAmount) {
		this.pendingAmount = pendingAmount;
	}


	public String getReSph1() {
		return reSph1;
	}


	public void setReSph1(String reSph1) {
		this.reSph1 = reSph1;
	}


	public String getReCyl1() {
		return reCyl1;
	}


	public void setReCyl1(String reCyl1) {
		this.reCyl1 = reCyl1;
	}


	public String getReAxis1() {
		return reAxis1;
	}


	public void setReAxis1(String reAxis1) {
		this.reAxis1 = reAxis1;
	}


	public String getReVA1() {
		return reVA1;
	}


	public void setReVA1(String reVA1) {
		this.reVA1 = reVA1;
	}


	public String getLeSph1() {
		return leSph1;
	}


	public void setLeSph1(String leSph1) {
		this.leSph1 = leSph1;
	}


	public String getLeCyl1() {
		return leCyl1;
	}


	public void setLeCyl1(String leCyl1) {
		this.leCyl1 = leCyl1;
	}


	public String getLeAxis1() {
		return leAxis1;
	}


	public void setLeAxis1(String leAxis1) {
		this.leAxis1 = leAxis1;
	}


	public String getLeVA1() {
		return leVA1;
	}


	public void setLeVA1(String leVA1) {
		this.leVA1 = leVA1;
	}


	public String getReSph2() {
		return reSph2;
	}


	public void setReSph2(String reSph2) {
		this.reSph2 = reSph2;
	}


	public String getReCyl2() {
		return reCyl2;
	}


	public void setReCyl2(String reCyl2) {
		this.reCyl2 = reCyl2;
	}


	public String getReAxis2() {
		return reAxis2;
	}


	public void setReAxis2(String reAxis2) {
		this.reAxis2 = reAxis2;
	}


	public String getReVA2() {
		return reVA2;
	}


	public void setReVA2(String reVA2) {
		this.reVA2 = reVA2;
	}


	public String getLeSph2() {
		return leSph2;
	}


	public void setLeSph2(String leSph2) {
		this.leSph2 = leSph2;
	}


	public String getLeCyl2() {
		return leCyl2;
	}


	public void setLeCyl2(String leCyl2) {
		this.leCyl2 = leCyl2;
	}


	public String getLeAxis2() {
		return leAxis2;
	}


	public void setLeAxis2(String leAxis2) {
		this.leAxis2 = leAxis2;
	}


	public String getLeVA2() {
		return leVA2;
	}


	public void setLeVA2(String leVA2) {
		this.leVA2 = leVA2;
	}


	public String getReSph3() {
		return reSph3;
	}


	public void setReSph3(String reSph3) {
		this.reSph3 = reSph3;
	}


	public String getReCyl3() {
		return reCyl3;
	}


	public void setReCyl3(String reCyl3) {
		this.reCyl3 = reCyl3;
	}


	public String getReAxis3() {
		return reAxis3;
	}


	public void setReAxis3(String reAxis3) {
		this.reAxis3 = reAxis3;
	}


	public String getReVA3() {
		return reVA3;
	}


	public void setReVA3(String reVA3) {
		this.reVA3 = reVA3;
	}


	public String getLeSph3() {
		return leSph3;
	}


	public void setLeSph3(String leSph3) {
		this.leSph3 = leSph3;
	}


	public String getLeCyl3() {
		return leCyl3;
	}


	public void setLeCyl3(String leCyl3) {
		this.leCyl3 = leCyl3;
	}


	public String getLeAxis3() {
		return leAxis3;
	}


	public void setLeAxis3(String leAxis3) {
		this.leAxis3 = leAxis3;
	}


	public String getLeVA3() {
		return leVA3;
	}


	public void setLeVA3(String leVA3) {
		this.leVA3 = leVA3;
	}
}

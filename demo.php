<?php 

	$conn=NULL;
	$db='react_native';
	$conn= new mysqli('localhost','root','',$db);
	mysqli_query($conn,'SET NAMES UTF8');
	
	$sql= "SELECT * FROM chi_so";
	$query=mysqli_query($conn,$sql);
	
	$arrChiso= array();

	//Tạo một class chứa dữ liệu chỉ số
	class chiso{
		var $id_cs;
		var $chi_so_cu;
		var $chi_so_moi;
		var $ket_qua;
		function chiso($_idcs, $_cscu, $_csmoi, $_ketqua){
			$this->id_cs=$_idcs;
			$this->chi_so_cu=$_cscu;
			$this->chi_so_moi=$_csmoi;
			$this->ket_qua=$_ketqua;
		}
	}
	while ($row=mysqli_fetch_array($query)){
		array_push($arrChiso, new chiso($row["id_cs"], $row["chi_so_cu"], $row["chi_so_moi"], $row["ket_qua"]));
	}
	echo json_encode($arrChiso);
	
 ?>
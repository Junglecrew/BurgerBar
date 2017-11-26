<?php 
	$name = $_POST['author_name'];
	$phone = $_POST['author_phone'];
	$street = $_POST['author_street'];
	$building = $_POST['author_building'];
	$block = $_POST['author_block'];
	$flat = $_POST['author_flat'];
	$floor = $_POST['author_floor'];
	$comment = $_POST['comment'];
	$paymethod = $_POST['paymethod'];
	$callback = $_POST['callback'];
	$callback = isset($callback) ? 'НЕТ' : 'ДА';

	$mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Номер дома: ' . $building . '</li>
                <li>Корпус: ' . $block . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Комментарий к заказу: ' . $comment . '</li>
                <li>Способ оплаты: ' . $paymethod . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>    
    ';

	$headers = "From: Администратор сайта <junglecrew@gmail.com>\r\n".
	    "MIME-Version: 1.0" . "\r\n" .
	    "Content-type: text/html; charset=UTF-8" . "\r\n";

	    $mail = mail('junglecrew@gmail.com', 'Заказ', $mail_message, $headers);
	    $data;

	    if ($mail) {
	    	echo "done";
	        $data['status'] = "OK";
	        $data['mes'] = "mail sent";
	    }else{
	    	echo "error";
	        $data['status'] = "NO";
	        $data['mes'] = "error";
	    }
	    echo json_encode($data);
 ?>
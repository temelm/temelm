<?php
  function send () {
    $result = 'error';

    if (isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['email']) && !empty($_POST['email'])
      && isset($_POST['message']) && !empty($_POST['message'])) {
      $name = strip_tags($_POST['name']);
      $email = strip_tags($_POST['email']);
      $company = '';
      if (isset($_POST['company']) && !empty($_POST['company'])) {
        $company = '<p>Company: '.strip_tags($_POST['company']).'</p>';
      }
      $to = 'mustafatemel90@gmail.com';
      $subject = 'Message from '.$name.' via temelm.com';
      $message = '<p>Name: '.$name.'</p>'.'<p>Email: '.$email.'</p>'.$company.'<p>'.strip_tags($_POST['message']).'</p>';
      $message = wordwrap($message, 120);
      $headers = 'From: '.$email."\r\n";
      $headers .= 'Reply-To: '.$email."\r\n";
      $headers .= 'MIME-Version: 1.0'."\r\n";
      $headers .= 'Content-Type: text/html; charset=UTF-8'."\r\n";

      mail($to, $subject, $message, $headers);
      
      $result = 'success';
    }

    return $result;
  }
  
  echo send();
?>

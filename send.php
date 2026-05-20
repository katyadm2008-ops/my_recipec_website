<?php
// Проверяем, что форма была отправлена методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Получаем данные из формы и очищаем их
$name = htmlspecialchars(trim($_POST['name']));
$email = htmlspecialchars(trim($_POST['email']));
$rec = htmlspecialchars(trim($_POST['rec']));
$comment = htmlspecialchars(trim($_POST['comment']));

// Проверяем, что обязательные поля заполнены
if (empty($name) || empty($email) || empty($comment)) {
echo "Пожалуйста, заполните все обязательные поля.";
exit;
}

// Проверяем корректность email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
echo "Указан некорректный email-адрес.";
exit;
}

// Настройки получателя
$to = "katya.dm2008@gmail.com"; // Замените на ваш email

// Формируем тело письма
$email_body = "Получено новое сообщение из формы обратной связи.\n\n";
$email_body .= "Имя: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Тема: $rec\n\n";
$email_body .= "Сообщение:\n$comment\n";

// Заголовки письма
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Отправляем письмо
if (mail($to, $email_subject, $email_body, $headers)) {
echo "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.";
} else {
echo "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.";
}

} else {
// Если пользователь попытался напрямую обратиться к скрипту
echo "Доступ запрещен.";
}
?>


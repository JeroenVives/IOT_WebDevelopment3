<?php
    class Account
    {
        // variabelen
        public int $number;
        public string $type;
        public float $balance;
        // constructor
        public function __construct($number, $type, $balance)
        {
            $this->number = $number;
            $this->type = $type;
            $this->balance = $balance;
        }
        public function deposit(float $amount): void
        {
            $this->balance += $amount;
        }
        public function withdraw(float $amount): bool
        {
            $result = $this->balance - $amount;
            if ($result < 0 && $this->type != "Visa") {
                return false;
            }
            else {
                $this->balance = $result;
                return true;
            }
        }   
    }
?>

<h1>Account operations</h1>

<?php
    $accounts = [
        new Account(12345, "Visa", 0.00),
        new Account(67890, "Checking", 2500.00)
    ];
    foreach ($accounts as $account) {
        echo "<p>My {$account->type} account (ID: {$account->number}) has a balance of {$account->balance}.</p>";
    }
    echo "<br>";
    $withdrawal = 3000;
    foreach ($accounts as $account) {
        echo "<p>I would like to withdraw {$withdrawal} from my {$account->type} account (ID: {$account->number})...</p>";
        $success = $account->withdraw($withdrawal);
        if ($success) {
            echo "<p>Withdrawal succeeded! The current balance is now {$account->balance}.</p>";
        }
        else {
            echo "Withdrawal failed! Balance ({$account->balance}) was insufficient.";
        }
        echo "<br>";
    }
?>
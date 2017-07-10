let BanckAccount:{money: number, deposit: (value: number) => number } = {
    money: 2000,
    deposit: function(value:number):number
    {
        return this.money += value;
    }
}

let myself: { name: string, banckaccount, hobbies: [string, string] } = {
    name: "Asaad",
    banckaccount: BanckAccount,
    hobbies:["violin", "Cooking"]
}
myself.banckaccount.deposit(3000);
console.log(myself.banckaccount.money);
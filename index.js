const notificationSystem = (() => {
    let observers = [];
  
    return {
      subscribe(observer) {
        observers.push(observer);
      },
      unsubscribe(observer) {
        observers = observers.filter((obs) => obs !== observer);
      },
      notify(data) {
        observers.forEach((observer) => observer.update(data));
      },
    };
  })();

  class Observer {
    constructor(name) {
      this.name = name;
    }
    update(data) {
      console.log(`${this.name} received: ${data}`);
    }
  }
  console.log("Set 1:");
  const observer1 = new Observer("Observer 1");
  const observer2 = new Observer("Observer 2");
  
  notificationSystem.subscribe(observer1);
  notificationSystem.subscribe(observer2);
  
  notificationSystem.notify("Event A"); 
  
  notificationSystem.unsubscribe(observer2);
  
  notificationSystem.notify("Event B"); 
  
  console.log("\nSet 2:");
  const observer3 = new Observer("Observer 3");
  notificationSystem.subscribe(observer3);
  
  notificationSystem.notify("Event X");
  
  const observer4 = new Observer("Observer 4");
  notificationSystem.subscribe(observer4);
  
  notificationSystem.notify("Event Y");
  
  console.log("\nSet 3:");
  const observer5 = new Observer("Observer 5");
  notificationSystem.subscribe(observer5);
  
  notificationSystem.notify("Event 100");
  
  notificationSystem.unsubscribe(observer5);
  
  notificationSystem.notify("Event 101");
  
  console.log("\nSet 4:");
  const observer6 = new Observer("Observer 6");
  const observer7 = new Observer("Observer 7");
  
  notificationSystem.subscribe(observer6);
  notificationSystem.subscribe(observer7);
  
  notificationSystem.notify("Event Hello");
  
  notificationSystem.unsubscribe(observer6);
  notificationSystem.unsubscribe(observer7);
  
  notificationSystem.notify("Event Goodbye");
  

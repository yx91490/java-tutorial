# 覆盖和隐藏方法
[[toc]]

## 实例方法
具有相同签名（名称，加上其参数的数量和类型）的子类中的实例方法以及作为超类中的实例方法的返回类型将覆盖超类的方法。

子类覆盖方法的能力允许类从行为足够「接近」的超类继承，然后根据需要修改行为。覆盖方法具有相同的名称，参数的数量和类型，以及覆盖方法的返回类型。重写方法也可以返回重写方法返回的类型的子类型。这个子类型被称为 **协变返回类型**。

当重写一个方法的时候，你可能想使用 `@Override` 注释来指示编译器，你打算在超类中覆盖一个方法。如果由于某种原因，编译器检测到该方法在其中一个超类中不存在，则会产生一个错误。有关更多 `@Override` 信息，请参阅 [Annotations](../annotations/predefined.html#override)。

## 静态方法

如果一个子类在超类中定义了一个与静态方法具有相同签名的静态方法，那么子类中的方法 **隐藏** 超类中的方法。

隐藏静态方法和重写实例方法之间的区别具有重要意义：

* 被调用的重写实例方法的版本是子类中的一个。
* 被调用的隐藏静态方法的版本取决于它是从超类还是子类调用。

考虑一个包含两个类的例子。第一个是 Animal，它包含一个实例方法和一个静态方法：

```java
public class Animal {
    public static void testClassMethod() {
        System.out.println("The static method in Animal");
    }

    public void testInstanceMethod() {
        System.out.println("The instance method in Animal");
    }
}
public class Cat extends Animal {
    public static void testClassMethod() {
        System.out.println("The static method in Cat");
    }

    public void testInstanceMethod() {
        System.out.println("The instance method in Cat");
    }

    public static void main(String[] args) {
        Cat myCat = new Cat();
        Animal myAnimal = myCat;
        Animal.testClassMethod();
        myAnimal.testInstanceMethod();
        myCat.testClassMethod();
    }
}
```
程序输出

```java
The static method in Animal
The instance method in Cat
The static method in Cat
```

静态方法被隐藏，区别就在与调用方式。而实例方法被调用是子类的方法


## 接口方法

接口中的 **默认方法** 和 **抽象方法** 像实例方法一样被继承。但是，当一个类或接口的超类型提供了具有相同签名的多个缺省方法时，
Java 编译器遵循继承规则来解决名称冲突。这些规则是由以下两个原则驱动的：

* 实例方法优于接口默认方法。

    ```java
    public class Horse {
        public String identifyMyself() {
            return "I am a horse.";
        }
    }
    public interface Flyer {
        default public String identifyMyself() {
            return "I am able to fly.";
        }
    }
    public interface Mythical {
        default public String identifyMyself() {
            return "I am a mythical creature.";
        }
    }
    public class Pegasus extends Horse implements Flyer, Mythical {
        public static void main(String... args) {
            Pegasus myApp = new Pegasus();
            System.out.println(myApp.identifyMyself());
        }
    }
    ```
    该方法 `Pegasus.identifyMyself` 返回字符串 I am a horse.

* 已被其他候选人覆盖的方法将被忽略。当超类型共享一个共同的祖先时，就会出现这种情况。
    ```java
    public interface Animal {
        default public String identifyMyself() {
            return "I am an animal.";
        }
    }
    public interface EggLayer extends Animal {
        default public String identifyMyself() {
            return "I am able to lay eggs.";
        }
    }
    public interface FireBreather extends Animal { }
    public class Dragon implements EggLayer, FireBreather {
        public static void main (String... args) {
            Dragon myApp = new Dragon();
            System.out.println(myApp.identifyMyself());
        }
    }
    ```
    该方法 `Dragon.identifyMyself` 返回字符串 I am able to lay eggs.


如果两个或多个独立定义的默认方法冲突，或者默认方法与抽象方法冲突，则 Java 编译器会产生编译器错误。您必须显式重写超类型方法。


考虑一下现在可以飞行的计算机控制汽车的例子。你有两个接口（OperateCar 和 FlyCar）为同一个方法提供默认实现，（startEngine）：

```java
public interface OperateCar {
    // ...
    default public int startEngine(EncryptedKey key) {
        // Implementation
    }
}
public interface FlyCar {
    // ...
    default public int startEngine(EncryptedKey key) {
        // Implementation
    }
}
```

同时实现类 OperateCar 和 FlyCar 必须覆盖的方法 startEngine。您可以使用 supe r关键字调用任何默认实现。

```java
public class FlyingCar implements OperateCar, FlyCar {
    // 不显式的声明则会报错
    public int startEngine(EncryptedKey key) {
        FlyCar.super.startEngine(key);
        OperateCar.super.startEngine(key);
    }
}
```

前面的名字 super（在这个例子中，FlyCar 或者 OperateCar）必须引用一个直接的超级接口，它定义或者继承了被调用的方法的默认值。这种形式的方法调用并不局限于使用相同的签名来区分包含默认方法的多个实现的接口。您可以使用 super 关键字在类和接口中调用默认方法。

类的继承实例方法可以覆盖抽象接口方法。考虑以下接口和类：

```java
public interface Mammal {
    String identifyMyself();
}
public class Horse {
    public String identifyMyself() {
        return "I am a horse.";
    }
}
public class Mustang extends Horse implements Mammal {
    public static void main(String... args) {
        Mustang myApp = new Mustang();
        System.out.println(myApp.identifyMyself());
    }
}
```

该方法 Mustang.identifyMyself 返回字符串 I am a horse. Horse 类覆盖了 Mammal 中的抽象方法

::: tip
接口中的静态方法永远不会被继承。
:::


## 修饰符

重写方法的访问说明符可以允许比重写的方法更多而不是更少的访问。例如，超类中的受保护实例方法可以在子类中公开，但不是私有的。

如果您尝试将超类中的实例方法更改为子类中的静态方法，则会收到编译时错误，反之亦然。

## 概要

下表总结了在超类中定义具有相同签名的方法时发生的情况。

使用与超类方法相同的签名定义方法

| -            | 超类实例方法   | 超类静态方法   |
|--------------|----------------|----------------|
| 子类实例方法 | 覆盖           | 生成编译时错误 |
| 子类静态方法 | 生成编译时错误 | 隐藏           |

::: tip
在一个子类中，可以重载从超类继承的方法。这种重载方法既不隐藏也不重写超类实例方法 - 它们是子类独有的新方法。
:::

# Progress Bar Component

# [Деплой](https://smolga2110.github.io/progress-bar-ozon/)

## Функциональность
* Normal State - отображение прогресса от 0% до 100%
* Animated State - циклическая анимация вращения
* Hidden State - скрытие компонента
* ### Присутствует Portrait / Landscape адаптивность

## Создание экземпляра

``` Js
const progressBar = new ProgressBar(container, options);
```

## Начало работы

``` Html
<!-- Контейнер для компонента -->
<div id="progress-container"></div>

<!-- Подключение скрипта -->
<script src="progress-bar.js"></script>
<script>
    // Инициализация
    const progressBar = new ProgressBar(
        document.getElementById('progress-container'),
        { value: 50 } // необязательное начальное значение
    );
</script>
```

## Параметры:
* container - HTML элемент для размещения
* options - объект настроек:
  * value - начальное значение (0-100)
  *  isAnimated - true/false
  *  isHidden - true/false

## Методы управления
### Установка значения

``` Js
progressBar.changeValue(75); // установить значение 75%
```

### Переключение анимации

``` Js
progressBar.animate(); // переключить анимацию
```

### Скрытие компонента

``` Js
progressBar.hide(); // переключить видимость
```

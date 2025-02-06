FROM maven:3.8.4-openjdk-17-slim AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем pom.xml и файлы с зависимостями
COPY pom.xml .

# Загружаем все зависимости проекта
RUN mvn dependency:go-offline

# Копируем все исходники проекта
COPY src ./src

# Выполняем сборку проекта (сгенерируем JAR файл)
RUN mvn clean package -DskipTests

# Переключаемся на новый слой для финальной сборки
FROM openjdk:17-jdk


# Копируем собранный JAR файл из предыдущего слоя
COPY --from=build /app/target/results-1.0-SNAPSHOT.jar /results.jar

# Открываем порт 8083
EXPOSE 8081

# Запускаем приложение
ENTRYPOINT ["java", "-jar", "/results.jar"]

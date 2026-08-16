FROM python:3.12-slim

#INSTALAMOS EL UV
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

#SETEAMOS EL FOLDER PRINCIPAL
WORKDIR /app

#CREAMOS EL ENVIRONMENT PARA LA APLICACION
RUN uv venv /opt/venv

#SETEAMOS EL ENVIRONMENT
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .

#INSTALAMOS LOS PAQUETES EN EL ENVIRONMENT
RUN uv pip install --no-cache-dir -r requirements.txt

COPY app.py .

EXPOSE 5000
CMD ["python", "app.py"]

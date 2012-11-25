#Archivo de configuración de omniauth, contiene el Consumer key y el Consumer secret que provee el API.
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 'wSb2cmoLRKy6wp1PTrHtvA', 'QSNSgJCk6HFr6DFackz5bHg64dahLz5eOVLQsZT7Bos'
end
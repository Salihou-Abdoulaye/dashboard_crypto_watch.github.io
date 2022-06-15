# Crypto Watch Tower

Api `coingecko api`

Market data : `https://api.coingecko.com/api/v3/global`

All market data : `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`

Coin price chart : `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`

Coingecko : `https://www.coingecko.com/fr/pi%C3%A8ces/`

# 1er des choses à faire c'est de faire ce composant Headerinfos.js
`- dans lequel on doit appeler le titre, données crypto et marchés && les infos gloabale du marché`
`-faire le composant PercentChange.js pour les couleurs si c'est >0 || <=0`
`-puis ce TableFilters pour ressortir les bouttons de filtrage`

# 2e des choses c'est de faire le graphe globale de toutes les infos GlobalChart.js
`-on recupere les données dans le composant App.js, puis on le passe en props dans GlobalChart.js `
`-on utilise la librairie recharts treemap{https://recharts.org/en-US/} pour l'affficher {npm i recharts // pour l'installer}`

# 3e des chose c'est de faire ce table.js
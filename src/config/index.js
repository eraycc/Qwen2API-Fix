const dotenv = require('dotenv')
dotenv.config()

/**
 * 解析API_KEY环境变量，支持逗号分隔的多个key
 * @returns {Object} 包含apiKeys数组和adminKey的对象
 */
const parseApiKeys = () => {
  const apiKeyEnv = process.env.API_KEY
  if (!apiKeyEnv) {
    return { apiKeys: [], adminKey: null }
  }

  const keys = apiKeyEnv.split(',').map(key => key.trim()).filter(key => key.length > 0)
  return {
    apiKeys: keys,
    adminKey: keys.length > 0 ? keys[0] : null
  }
}

const { apiKeys, adminKey } = parseApiKeys()

const config = {
  dataSaveMode: process.env.DATA_SAVE_MODE || "none",
  apiKeys: apiKeys,
  adminKey: adminKey,
  apibaseurl: process.env.API_BASE_URL || "https://chat.qwen.ai",
  simpleModelMap: process.env.SIMPLE_MODEL_MAP === 'true' ? true : false,
  listenAddress: process.env.LISTEN_ADDRESS || null,
  listenPort: process.env.SERVICE_PORT || 3000,
  searchInfoMode: process.env.SEARCH_INFO_MODE === 'table' ? "table" : "text",
  outThink: process.env.OUTPUT_THINK === 'true' ? true : false,
  redisURL: process.env.REDIS_URL || null,
  autoRefresh: true,
  autoRefreshInterval: 6 * 60 * 60,
  cacheMode: process.env.CACHE_MODE || "default",
  logLevel: process.env.LOG_LEVEL || "INFO",
  enableFileLog: process.env.ENABLE_FILE_LOG === 'true',
  logDir: process.env.LOG_DIR || "./logs",
  maxLogFileSize: parseInt(process.env.MAX_LOG_FILE_SIZE) || 10,
  maxLogFiles: parseInt(process.env.MAX_LOG_FILES) || 5,
  ssxmodItna: process.env.SSXMOD_ITNA || "mqUxRDBDnD00I4eKYIxAK0QD2W3nDAQDRDl4Bti=GgexFqAPqDHI63vYWtiiY0DjOxqbVji84D/I7eGzDiMPGhDBeEHzKtg5xKFIWrEx4qICCGxK3OGYZeqK0Ge2Nq3vwn0XX3NyzZiPYxGLDY=DCqqqYorbDYAEDBYD74G+DDeDixGmQeDSDxD9DGPdglTi2eDEDYPdxA3Di4D+jebDmd4DGuo4x7QaRmxD0ux58mDz8aF46PmzMeqOVRbDjTPD/R+LO0RC2FkKYa9AV8amGeGyi5GuDPmb=jHORnniHpeY0d0hbGedW4qTBq=DYx+DP24FGDBirCht5B5QYipOYameDD3bWD+GNbADKpt9gtBoNbGGwiDmmIafRPx2Uem2i44Gb1mGz0pNlqV=Gxlqk8xP2DxD"
}

module.exports = config

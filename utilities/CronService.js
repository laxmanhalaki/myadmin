import cron from 'cron';
import https from 'https';
const backendUrl = 'https://myadmin-lu8h.onrender.com';
const job=new cron.CronJob('*/13 * * * *', ()=>{
	https.get(backendUrl,(res)=>{
		if(res.statusCode==200){
			console.log('server restarted successfully')
		}else{
			console.log('error while restarting the server')
		}
	})
})
export default job;
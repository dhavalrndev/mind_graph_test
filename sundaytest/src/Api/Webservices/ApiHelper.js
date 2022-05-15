export const onCallget = (url, CallBack) => {
    let response = {};
    response.success = false;
    try {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(data)
        }

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                response.success = true;
                response.data = data
                // console.log("OUT IS", data)
                if(CallBack!=null && CallBack!=undefined)
                {
                    CallBack(response)
                }
            }).catch(response => {
                response.success = false;
                if(CallBack!=null && CallBack!=undefined)
                {
                    CallBack(response)
                }
            })
        
    } catch (exc) {
        console.log(" error is--", exc)
        CallBack(response)
    }
}
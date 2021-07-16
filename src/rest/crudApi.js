export default class CRUDApi {
    static crudURL = 'http://ims.homelinux.com:18088/crud';

    static crudPost = async (entity, data) => {
        try {
            let resp = await fetch(`${this.crudURL}?entity=${entity}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        } catch (err) {
            console.error("We can't get the menu data: " + err);
        }
    };

    static fixTalendData = (getResponse) => {
        let rdata = getResponse ? getResponse : [];
        // I need to do this because the REST service returns strange results of only a single record or no records at all
        if (rdata.constructor === Array) {
            this.data = rdata;
        } else {
            this.data = [];
            // handle single record returned - not in array - this is because Talend does weird stuff 
            this.data.push(rdata.dummyLoop);
            // handle no record returned - id = 0 - this is because Talend does weird stuff
            if (this.data[0].id == 0) {
                this.data = [];
            }
        }
        return this.data;
    }

    static crudGet = async (entity) => {
        let resp = {};
        try {
            resp = await fetch(`${this.crudURL}?entity=${entity}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        catch (err) {
            console.error("We can't get the menu data: " + err);
        };

        resp = await resp.json();
        resp = await this.fixTalendData(resp);
        return resp;
    };

    static crudPut = async (entity, id, data) => {
        try {
            let resp = await fetch(`${this.crudURL}?entity=${entity}&id=${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        } catch (err) {
            console.error("We can't get the menu data: " + err);
        }
       
    }
    static crudDelete = async (entity, id) => {
        try {
            let resp = await fetch(`${this.crudURL}?entity=${entity}&id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

        } catch (err) {
            console.error("We can't get the menu data: " + err);
        }
       
    }
}
class ResponseObjClass {
	serviceName: string = '';
	status: boolean = false;
	statusCode: number = 404;
	message: (string|null) = 'Not Found';
	response: any = null;

	setResponse(serviceName:string, statusCode:number, message:(string|null), status:boolean, response?: object | null){
		this.serviceName = serviceName;
		this.status = status;
		this.statusCode = statusCode;
		this.message = message;
		this.response = response ?? null;
	}

	set400(serviceName:string, message:(string|null)){
		this.serviceName = serviceName;
		this.status = false;
		this.statusCode = 400;
		this.message = message;
		this.response = null
	}

	set500(serviceName:string, message?:(string|null)){
		this.serviceName = serviceName;
		this.status = false;
		this.statusCode = 500;
		this.message = message ?? "Internal Server Error";
		this.response = null;
	}

	set404(serviceName:string, message?:(string|null)){
		this.serviceName = serviceName;
		this.status = false;
		this.statusCode = 500;
		this.message = message ?? "Not Found";
		this.response = null;
	}
}

export default ResponseObjClass;

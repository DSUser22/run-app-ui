import axios from "axios";

const PLAN_API_BASE_URL="http://localhost:8080/api/v1/my/plan";

class PlanService{
    buildPlan(plan){
        return axios.post(PLAN_API_BASE_URL, plan)
    }
    deletePlan(plan){
        return axios.delete(PLAN_API_BASE_URL, plan)
    }
}
export default new PlanService();
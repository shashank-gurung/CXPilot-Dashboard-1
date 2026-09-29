import { Router, type IRouter } from "express";
import dashboardRouter from "./dashboard";
import healthRouter from "./health";

const router: IRouter = Router();

router.use(healthRouter);
router.use(dashboardRouter);

export default router;

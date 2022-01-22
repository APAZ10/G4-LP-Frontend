import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bosque } from 'app/interfaces/bosques';
import { BosquesService } from 'app/services/bosques/bosques.service';
//import { LikeService } from 'app/services/like/like.service';

@Component({
    selector: 'app-bosque',
    templateUrl: './bosque.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `],
    styleUrls: ['./bosque.component.css']
})

export class BosqueComponent implements OnInit, OnDestroy {

    bosque: Bosque;

    constructor(
        private route: ActivatedRoute,
        private bosqueService: BosquesService,
        //private likeService: LikeService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.initData(id);
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    ngOnDestroy(): void {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    private async initData(bosqueId: string): Promise<void> {
        await this.fetchBosque(bosqueId);
    }

    private fetchBosque(bosqueId: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.bosqueService.get(bosqueId).subscribe(async bosque => {
                //await this.fetchLikes(bosque);
                console.log(bosque)
                this.bosque = bosque["data"];
                resolve();
            });
        });
    }
    /*
    private fetchLikes(bosque: Bosque): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.likeService.list(bosque.id).subscribe(likes => {
                bosque.likes = likes.length;
                resolve();
            });
        })
    }*/
}
